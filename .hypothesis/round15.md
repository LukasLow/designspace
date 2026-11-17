# Runde 15 — Social Profile

**Status:** läuft · **Screen 1 von 10** · Route `/taste/15/`

## Hypothesen

### H1 — Bildfläche
Ein Profil braucht oben ein Bild (Titelband oder Porträt), sonst wirkt es wie ein Formular.
**Gegenprobe:** Ein ruhiger Kopf ohne Bild kann bei einem Designsystem besser tragen, weil
nichts ablenkt. **Testet:** `layout.md`, `shapes.md`.
**Varianten:** 01 Titelband · 02 kein Bild · 03 großes Porträt · 05 Karte.

### H2 — Hierarchie
Bei einem Bild daneben muss der Name lauter sein als in einer Liste (40 px statt 24 px).
**Gegenprobe:** Der Name darf kleiner bleiben, weil das Bild die Identität trägt.
**Testet:** `type.md`.
**Varianten:** 01 = 28 px · 02 = 32 px · 03 = 44 px · 04 = 24 px.

### H3 — Aktionen
„Folgen" ist die Hauptaktion und gehört als gefüllte Fläche direkt neben den Namen.
**Gegenprobe:** Aktionen gehören unter die Kennzahlen, weil sie dort entschieden werden.
**Testet:** `colors.md`, `shapes.md`.
**Varianten:** 01 rechts · 02 unter der Bio · 05 unter den Zahlen (volle Breite).

## Fünf Varianten

| # | Slug | Was anders ist |
|---|---|---|
| 01 | `01-twitter` | Titelband 120 px, Avatar überlappt, Name 28, Aktionen rechts |
| 02 | `02-ruhig` | kein Bild, Avatar links, Name 32, Kennzahlen als Zeilen |
| 03 | `03-editorial` | Porträt 160, Name 44, Bio als Lead |
| 04 | `04-dicht` | Kopf kompakt, Kennzahlen als Chips, Beiträge dicht |
| 05 | `05-karte` | Profil als schwebende Karte, Aktionen volle Breite |

## Ergebnis

Gewählt: **01, 04, 05** — nicht eine Variante, sondern drei, die dasselbe leisten.
Ablehnung: das Titelband als **Pflicht** (02 und 03 mit festem Bild/Porträt).

- **H1 Bildfläche — teilweise widerlegt.** Das Banner ist **nicht Teil der Designsprache**.
  Es ist eine produktabhängige Option: die Basis funktioniert ohne, ein Banner muss sich
  sauber einhängen lassen (oben, ohne den Kopf zu verschieben).
- **H2 Hierarchie — bestätigt, aber anders begründet.** Der Name trägt den Screen
  (32–44 px), auch ohne Bild. Nicht das Bild macht die Identität, der Name tut es.
- **H3 Aktionen — bestätigt.** Folgen und Nachricht sitzen **rechts neben dem Namen**.

## Erkenntnisse

1. Ein Profil braucht **kein** Bild. Ein optionales Banner ist erlaubt, aber nie Bedingung.
2. Der Name ist der Anker: groß, links, oben. Das Bild ist Beiwerk.
3. Aktionen gehören in die Kopfzeile, rechts — nicht unter die Bio, nicht unter die Zahlen.

