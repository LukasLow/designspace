# .hypothesis — das implizite Modell deines Geschmacks

Hier steht nicht, was gebaut ist, sondern **was wir glauben** — und wie sicher.
Jede Datei ist ein Parameter mit Spektrum, Erkenntnissen und einer Bauanleitung,
aus der sich neue Dinge erzeugen lassen (nicht nur nachahmen).

## Ablauf pro Screen

1. **Screen wählen** (aus `screens.md`).
2. **Drei Hypothesen** aufstellen — je eine pro Datei, die der Screen berührt.
   Jede Hypothese braucht:
   - **Ableitung** — aus welcher früheren Runde folgt sie? (mit Nummer)
   - **Prognose** — welche Variante gewinnt, welche verliert?
   - **Gegenprobe** — was würde sie widerlegen?
3. **Fünf Varianten** bauen, die sich in genau diesen Parametern unterscheiden.
4. **Der Nutzer urteilt** per `show` oder per Route.
5. **Erkenntnis eintragen**: was gilt, was widerlegt ist, mit Runden-Nummer.
6. **Widersprüche prüfen**: Passt die neue Erkenntnis zu den anderen Dateien?
   Wenn nein: nicht glätten, sondern notieren und in einer späteren Runde testen.

**Eine Hypothese ohne Ableitung ist eine Vermutung, keine Hypothese.** Sie darf gestellt
werden, muss aber als `vermutet` markiert sein und in der nächsten Runde eine Gegenprobe
bekommen.

## Statuswerte

| Status | Bedeutung |
|---|---|
| **fest** | durch mindestens eine Runde bestätigt, keine offene Gegenprobe |
| **vermutet** | aus anderen Entscheidungen abgeleitet, nie direkt getestet |
| **offen** | noch kein Test, nur Spektrum |
| **widersprüchlich** | zwei Erkenntnisse passen nicht zusammen — Test nötig |

## Konvergenz

Wir sind fertig, wenn **drei Screens hintereinander** keinen Parameter mehr
verändern. Vorher nicht. Ein Screen, der nichts ändert, ist ein Ergebnis.

## Format einer Datei

```
## Status
## Was gilt
## Spektrum (alle Möglichkeiten, nicht nur die gebauten)
## Offene Fragen
## Erkenntnisse (Runde → Befund)
## Widersprüche
## Bauanleitung (generativ: wie man ein neues Element daraus baut)
```

## Regeln

- **Nichts löschen.** Widerlegtes bleibt stehen, markiert mit ~~gestrichen~~.
- **Immer mit Runde belegen.** „Runde 9: Weich 18 gewinnt gegen 12."
- **Spektrum vor Auswahl.** Erst alle Möglichkeiten aufschreiben, dann testen.
- **Bauanleitung statt Vergleich.** Nicht „wie Lucide", sondern die Maße,
  aus denen ein neues Icon entsteht.
- **Ein Screen pro Runde.** Nicht drei Screens gleichzeitig.
