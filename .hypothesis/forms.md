# Formulare

## Status
offen. Nur ein Feld (`Field`) existiert, nie im Fluss getestet.

## Was gilt (vorläufig)
- Feld: 48 px hoch, Radius 18, Fläche `#050505`, Rand 1 px `line-strong`.
- Label 13,5/700, Großbuchstaben, Laufweite 0,06.
- Fokus: 3 px Petrol-Ring, Rand bleibt.
- Fehler: Rand rot, Meldung unter dem Feld; Hinweis ersetzt Fehlermeldung.

## Spektrum
Eine Spalte · zwei Spalten · Feld über volle Breite ·
Label oben / links / innen (Floating) ·
Fehler inline / unter dem Feld / als Zusammenfassung oben ·
Validierung beim Tippen / beim Verlassen / beim Absenden ·
Erfolg als Toast / als Karte / als Zeile.

## Offene Fragen
- **Login**: ein Blatt in der Mitte oder Karte auf einer Fläche?
- **Registrierung**: ein Schritt mit allen Feldern oder zwei Schritte?
- Wann erscheint der Fehler — sofort oder erst beim Absenden?

## Erkenntnisse
- Runde 14: Fehler gehören in eine Karte, Info in einen Toast (gilt auch hier).

## Widersprüche
Keine.

## Bauanleitung
```
Feld: 48 px, Radius 18, Rand 1 px, Fokus 3 px Petrol
Label: 13,5/700, uppercase, 0,06 em
Fehler: Rand + Text rot, Meldung 14/700 unter dem Feld
```
