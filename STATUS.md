# STATUS — DesignSpace

Stand-Datei. Damit der Faden nach Tagen nicht verloren geht.

## Entschieden

| Bereich | Entscheidung | Wo |
|---|---|---|
| Farbe | Petrol `#37B5BE` Handlung, Powerade `#00A8E8` Info, Neon `#00E89A` Erfolg, Violett `#C4A4FF` Kategorie, Gold `#FFC24B` Warnung, Rot `#FF0000` Fehler | Runde 8 |
| Rolle der Farbe | **Fläche** — Aktionen und Status sind gefüllt | Runde 6 |
| Material | **Buttons flach** (Korn entfernt); Korn bleibt als Option für große Flächen | Runde 10 |
| Form | **Radius 18** für Controls (Turnier-Sieger 05 Weich 18) | Runde 9 |
| Druck | senkrecht, nie seitlich | Runde 4 |
| Aufbau | **Liste + Karte** — Zeilen, Karte von rechts beim Klick | Runde 11 |
| Typografie | **Laut** — 40 px Titel, Rest klein | Runde 12 |
| Dichte | **Grob** — 84 px Zeilen, Label 15, Wert 17, 32 px vor der Liste | Runde 13 |
| Zustände | **Fehler als Karte**, **Info als Toast**, Laden als Korn-Skeleton | Runde 14 |
| Kurseite | **11 Umbau** — Info + Handeln + Kurs, Tabs, Chart + Spanne, Kennzahlen + Meldungen; mobil = 10 unter 860 px | Runde 17 |
| Schrift | **Atkinson Hyperlegible, immer** (kein Mono für UI-Text) | Regel |

## Offen

| # | Frage | Runde |
|---|---|---|
| 1 | **Formulare** — Login, Registrierung, Validierung | 15 |
| 2 | **Daten** — Tabellen, Charts, Kalender | 16 |
| 3 | **Mobil** — Bottom-Nav, Sheets von unten | 17 |
| 4 | **Seitenlayout** — Shell, Navigation, wie eine Seite aufgebaut ist | später |
| 5 | **Physik** — Button Feder oder Taste (beide lauffähig) | — |

## Geschmack (Stand)

- **Mag:** ProtonMail, Instagram.
- **Mag nicht:** Zoho Mail, Gmail, LinkedIn.
- **Form:** symmetrisch, kantig rund (Radius 18), matt, Fläche.
- **Nicht:** aufgeblasene Karten, dekorative Farbe, Glanz, Glas.

## Gebaut

- Komponenten: Button, Card, Field, Chip, Avatar, Switch, Checkbox, Separator
- Geplant: 39 weitere (siehe `src/lib/components/manifest.ts`)
- Screen: `/konto` (Konto & Einstellungen)

## Routen

```
/                     Start
/showcase             Komponenten und Tokens
/taste                Übersicht aller Runden
/taste/round1 … 13    Entscheidungen
/konto                erster echter Screen
```

## Nächster Schritt

1. **Runde 14** beantworten (Zustände: leer, laden, Fehler, Erfolg).
2. Danach **Runde 15** (Formulare).
3. Dann Vorlagen rendern: `/vorlagen/einstellungen`, `/vorlagen/login`,
   `/vorlagen/registrieren`, `/vorlagen/homepage`, `/vorlagen/chat`,
   `/vorlagen/profil`.

Keine neuen Runden vor diesen Entscheidungen.
