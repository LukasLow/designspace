# Runde 19 — Chat

**Status:** läuft · **Screen 5 von 10** · Route `/taste/19/`

Der Chat ist der erste Screen, in dem **Icons allein** handeln (Anhang, Senden, Mehr) —
bisher standen sie immer neben Text. Deshalb testet diese Runde `icons.md` zuerst.

## H1 — Icons: Strich genügt, Senden braucht Fläche

**Ableitung.** Die Sidebar-Icons (Runde 11) waren Strich und wurden nicht beanstandet —
aber sie standen neben Text. In Runde 6 wurde Farbe zur Fläche: Handlung ist gefüllt.
**Prognose.** Kopf-Icons bleiben Strich (1,8 px); der **Senden-Knopf** wird gefüllt,
weil er die Handlung ist. Outline-Senden verliert.
**Gegenprobe.** Wenn ein gefüllter Senden-Knopf zu laut wirkt, gilt „Fläche" nicht für
kleine Controls.

## H2 — Nachrichten: Zeilen, keine Blasen

**Ableitung.** Jeder Screen bisher war eine Liste (Runde 11, 13, 16, 17). Blasen sind
iOS-Formsprache, nicht unsere — und sie brechen die Symmetrie der Spalte.
**Prognose.** `01 Zeilen` gewinnt gegen `02 Blasen`.
**Gegenprobe.** Wenn Blasen gewinnen, ist der Chat appy-er als gedacht und die
Listenregel gilt nicht für Konversationen.

## H3 — Composer: eine Leiste, keine Karte

**Ableitung.** Runde 17: Das Formular bleibt schmal und ruhig, die Bühne liegt daneben.
Ein Composer ist ein Eingabefeld, kein Panel.
**Prognose.** `01 Zeilen` (Leiste unten) gewinnt gegen `03 Karten` (Composer als Karte).
**Gegenprobe.** Wenn der Karten-Composer gewinnt, braucht Eingabe mehr Rahmen als gedacht.

## Fünf Varianten

| # | Slug | Was anders ist |
|---|---|---|
| 01 | `01-zeilen` | Nachrichten als Zeilen mit Avatar, Composer-Leiste |
| 02 | `02-blasen` | Blasen links und rechts, Composer als Pille |
| 03 | `03-karten` | jede Nachricht eine Karte, Composer als Karte |
| 04 | `04-geteilt` | Konversationsliste links, Thread rechts |
| 05 | `05-fokus` | eine Unterhaltung, große Schrift, wenig Chrome |

## Ergebnis

**01 Zeilen gewinnt.** Gruppe im Kopf, Zeit neben dem Namen, Folgezeilen ohne Avatar.
06 Element X war „nice", aber nicht die Wahl.

- **H1 Icons — bestätigt.** Kopf-Icons als Strich (Telefon, Video); der Senden-Knopf
  ist gefüllt. Die Büroklammer war unlesbar und wurde durch ein Plus ersetzt.
- **H2 Zeilen — bestätigt.** Blasen verlieren, die Liste gewinnt.
- **H3 Composer — bestätigt.** Eine Leiste unten, keine Karte.

## Erkenntnisse

1. Chat ist eine **Liste**: Avatar, Name + Zeit, Text; Folgezeilen rücken ein.
2. Die Kopfzeile zeigt die **Gruppe**, nicht eine Person — auch bei 1:1 ein Name,
   bei Gruppen die Mitglieder.
3. Icons ohne Text funktionieren als Strich; die Hauptaktion bleibt gefüllt.

