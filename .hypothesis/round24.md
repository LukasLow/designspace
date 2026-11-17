# Runde 24 — Werkzeuggruppen

**Status:** läuft · **Komponenten-Runde** · Route `/taste/24/`

Aus der Proton-Referenz: Aktionen stehen in einer **angedockten Gruppe** und bilden ein
Objekt. Das ist die Form, die uns noch fehlt — bisher sind alle Buttons einzeln.

## H1 — Angedockt ist stärker als einzeln

**Ableitung.** Runde 6: Fläche statt Kante. Runde 19: Icons ohne Text funktionieren.
Eine Reihe gleicher Aktionen ist **ein** Gegenstand, keine fünf.
**Prognose.** `01 Angedockt` gewinnt gegen `02 Einzeln`.
**Gegenprobe.** Wenn einzeln gewinnt, bleibt der Button die Einheit und Gruppen sind Zierrat.

## H2 — Mit Text nur, wenn Platz ist

**Ableitung.** Runde 12: großer Titel, kleiner Rest. Runde 22: Aktionen als Icon + Zahl.
**Prognose.** In einer **Werkzeugleiste** reicht Icon; Text braucht es nur in Menüs.
`03 Mit Text` verliert gegen `01`.
**Gegenprobe.** Wenn Text gewinnt, sind die Icons noch nicht klar genug.

## H3 — Zwei Gruppen statt einer

**Ableitung.** Runde 17: Tabs schaffen Ordnung. Runde 14: eine Aussage pro Fläche.
**Prognose.** `04 Zwei Gruppen` (links Hauptaktionen, rechts Teilen/Weiterleiten) gewinnt
gegen eine lange Reihe.
**Gegenprobe.** Wenn eine Reihe gewinnt, ist die Gruppe ein Menü, kein Werkzeug.

## Fünf Varianten

| # | Slug | Was anders ist |
|---|---|---|
| 01 | `01-angedockt` | eine Gruppe, geteilte Trennlinien, Radius nur außen |
| 02 | `02-einzeln` | fünf einzelne Buttons mit Abstand |
| 03 | `03-mit-text` | angedockt, Icon plus Wort |
| 04 | `04-zwei-gruppen` | links Werkzeug, rechts Teilen und Weiterleiten |
| 05 | `05-kanten` | angedockt mit 1-px-Fugen statt Linien |

## Ergebnis

**04 Zwei Gruppen gewinnt.** Werkzeug links, Teilen/Weiterleiten rechts — zwei Objekte.
Dazu die Ergänzung: **die Gruppen wechseln mit dem Kontext** (Postfach ↔ Suche),
gebaut als `06 Kontext`.

- **H1 Angedockt — bestätigt.**
- **H2 Text — bestätigt** (nur in der zweiten Gruppe, weil sie eine andere Aufgabe hat).
- **H3 Zwei Gruppen — bestätigt und erweitert:** die Gruppierung ist **kontextabhängig**.
  Postfach: Archiv, Löschen, Tag | Teilen, Weiterleiten.
  Suche: Filter, Sortieren, Auswahl | Schließen.

## Erkenntnisse

1. **Werkzeugleiste = zwei Gruppen.** Links die Aufgabe, rechts das Weitergeben.
2. Gruppen sind **kontextabhängig**: die Suche tauscht die linke Gruppe aus.
3. Angedockt heißt: geteilte Linien, Radius nur außen, ein Objekt.

