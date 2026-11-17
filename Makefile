SHELL := /bin/sh

NODE_IMAGE ?= node:24-alpine
PORT ?= 8008

.PHONY: help build local-8008 reup stop logs check lock

help:
	@printf '%s\n' \
		'make reup        alles neu: dist bauen und Container neu starten (All-in-one)' \
		'make build       statischer Export nach ./dist (ueber Dockerfile.build)' \
		'make local-8008  lokal bauen und auf http://localhost:8008 ausliefern' \
		'make stop        lokalen Container stoppen' \
		'make logs        Logs des lokalen Containers' \
		'make check       svelte-check im Container' \
		'make lock        package-lock.json erzeugen'

# Statischer Export. Laeuft komplett im Container; Node wird auf dem Host
# nicht gebraucht. Ergebnis: ./dist (index.html + _app/ + static/).
build:
	docker build \
		--target export \
		--build-arg BASE_PATH="$(BASE_PATH)" \
		--output type=local,dest=./dist \
		-f Dockerfile.build .
	@printf -- '-> ./dist (%s Dateien)\n' "$$(find ./dist -type f | wc -l | tr -d ' ')"

local-8008:
	PORT=$(PORT) docker compose -f compose.yml up --build -d
	@printf -- '-> http://localhost:%s\n' "$(PORT)"

# Alles neu: statischer Export nach ./dist und lokaler Container neu.
reup: build
	PORT=$(PORT) docker compose -f compose.yml up --build -d
	@printf -- '-> neu gebaut und online: http://localhost:%s\n' "$(PORT)"

stop:
	docker compose -f compose.yml down

logs:
	docker compose -f compose.yml logs -f

check:
	docker run --rm -v "$(CURDIR):/app" -w /app -e CI=1 $(NODE_IMAGE) \
		sh -c "npm ci --no-audit --no-fund && npm run check"

lock:
	docker run --rm -v "$(CURDIR):/app" -w /app $(NODE_IMAGE) \
		npm install --package-lock-only --no-audit --no-fund
