# Aufbau, Navigation, Zustände

## Status
fest für die App-Fläche, offen für Website-Shells und Mobil.

## Was gilt
- **Liste + Karte**: Navigation links, Zeilenliste, Detail als Karte von rechts (Runde 11).
- Content 720 px, Navigation 220 px, Karte 380 px, Escape und Scrim schließen.
- **Zustände**: Fehler als Karte mit Aktion, Info als Toast unten rechts, Laden als
  Korn-Skeleton (Runde 14).
- Radien: Karte 22, Controls 18. Kein Schatten außer der Karte über dem Scrim.

## Spektrum
Seitenleiste · Navigation oben · zwei Spalten · Blatt · Raster · drei Spalten (getestet) ·
Detail dauerhaft / auf Klick · Modal / Sheet / Seite.

## Offene Fragen
- Wie sieht die **Website-Shell** aus (Landing, Marketing) — Navigation oben oder links?
- **Mobil**: Bottom-Nav oder Kopfzeile? Sheet von unten statt rechts?
- Wie viele Ebenen darf Navigation haben (eine, zwei, keine)?

## Erkenntnisse
- Runde 11: 06 „Liste + Karte" gewinnt; die permanente dritte Spalte wirkte wie
  verschachtelte Sidebars.
- Runde 14: Fehler braucht Platz (Karte), Info nicht (Toast).
- **Runde 15: Ein Titelbild ist nicht Teil der Designsprache.** Die Basis funktioniert
  ohne; ein Banner ist eine produktabhängige Option, die sich oben einhängt, ohne den
  Kopf zu verschieben. Aktionen sitzen rechts in der Kopfzeile.
- **Runde 16: Inhaltsverzeichnis rechts stehend**; Text links (45 Zeichen).
  Tabellen und Fakten bleiben im Fluss.
- **Runde 17: Kurseite = Info + Handeln + Kurs, Tabs, Chart + Tagesspanne,
  Kennzahlen + Meldungen.** Mobil ist dieselbe Seite, nicht eine zweite.
- **Runde 21: Landing = mittiger Hero + Bento-Raster.** Marketing ist die zweite Ausnahme
  von der Zwei-Spalten-Regel; die Shell ist eine Zeile mit drei Punkten.
- **Runde 22: Feed = dichte Zeilen**, Aktionen rechts; Filter als Chips. Karten bleiben
  für Einzelobjekte, Listen für Ströme.
- **Runde 23: Verzeichnis = Liste + Raster mit Umschalter.** Suche über der Liste, Chips daneben.

## Widersprüche
**Aufgelöst (Runde 20):** Der geteilte Einstieg aus Runde 18 war kein Einzelfall.
Registrierung übernimmt ihn ohne Diskussion — **Einstieg = geteilte Seite** ist damit
eine Regel, keine Ausnahme. (Banner „möglich, nicht Pflicht" ersetzt die frühere Annahme „Bild nötig".)

## Bauanleitung
Shell: `grid-template-columns: 220px 1fr`, Content `max-width: 720px`.
Liste: Zeilen 84 px, Chevron rechts, Klick öffnet Karte `380px` von rechts mit Scrim.
