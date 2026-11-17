# Screens — Reihenfolge und Hypothesen

Ein Screen pro Runde. Jeder Screen testet **drei** Parameter. Screens werden so
gewählt, dass sie unterschiedliche Belastungen bringen (Bild, Text, Daten, Formular).

| # | Screen | Testet vor allem | Status |
|---|---|---|---|
| 1 | **Social Profile** | Icons, Bildfläche, Hierarchie mit Bild | offen |
| 2 | **Artikel (Wikipedia-Stil)** | Textmaß, Inhaltsverzeichnis, Tabellen | offen |
| 3 | **Finance / Budget** | Daten, Charts, Zahlen, Dichte | offen |
| 4 | **Login** | Formular-Minimalismus, Fehler | offen |
| 5 | **Registrierung** | Schritte, Feldzahl, Fortschritt | offen |
| 6 | **Chat** | Liste, Composer, Blasen vs. Zeilen | offen |
| 7 | **Feed / Home** | Karten vs. Liste, Rhythmus | offen |
| 8 | **Verzeichnis (Personen)** | Karten, Suche, Filter | offen |
| 9 | **Landing / Marketing** | Typo groß, Shell, Navigation oben | offen |
| 10 | **Einstellungen** | erledigt (`/konto`) | entschieden |

## Screen 1 — Social Profile

**Drei Hypothesen:**

1. **Bildfläche** — großes Titelbild (wie Twitter) oder ruhiger Kopf ohne Bild?
   (Test: `layout.md`, `shapes.md`)
2. **Hierarchie** — Name, Bio und Zahlen: wie laut darf der Name sein, wenn ein
   Bild daneben steht? (Test: `type.md`)
3. **Aktionen** — Folgen-Button als gefüllte Fläche, als Kante oder als Zeile
   unter den Zahlen? (Test: `colors.md`, `shapes.md`)

**Fünf Varianten:**
1. Twitter-nah: Titelbild, Avatar überlappend, Kennzahlen unter dem Namen.
2. Ruhig: kein Titelbild, Avatar links, Name 40 px, Zahlen als Zeilen.
3. Editorial: großes Porträt, Name darunter, Bio als Lead, Aktionen unten.
4. Dicht: kleine Kopfzeile, Zahlen als Chips, Inhalte als Liste darunter.
5. Karte: Profil als schwebende Karte auf Schwarz, Aktionen als Icon-Reihe.

**Danach:** drei Erkenntnisse in `icons.md`, `type.md`, `layout.md` eintragen und
auf Widersprüche prüfen.
