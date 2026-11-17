---
name: decider
description: Führt interaktive Design-Entscheidungen mit dem show-Tool durch — Paarvergleiche, Varianten-Grids, Blindtests gegen Farbsehschwäche — und bringt das Ergebnis als Runde auf die Website. Nutzen, wenn eine Gestaltungsfrage nicht in Text, sondern am Auge entschieden werden soll.
---

# Decider — Entscheidungen am Auge

Abstrakte Begriffe wie „modern", „clean" oder „hochwertig" entscheiden nichts.
Der Nutzer hat eine Sehbehinderung und ist rot-grün-farbenblind. Deshalb wird
jede Design-Frage **gerendert, angeklickt und gemessen** — nicht beschrieben.

## Der Ablauf

1. **Eine Frage pro Runde.** Nicht Form, Farbe und Dichte gleichzeitig.
2. **Mindestens fünf echte Varianten.** Varianten, die nur den Akzent tauschen,
   zählen nicht.
3. **`show` öffnen** — dunkel, randlos, ohne Optionsleiste.
4. **Der Nutzer urteilt** durch Anklicken, nicht durch Beschreiben.
5. **Ergebnis auf die Website**: eigene Route `/taste/roundN`, Urteil im Footer,
   danach die Tokens in `src/lib/tokens/` aktualisieren. Nichts überschreiben.

## Harte Regeln für `show`

- **Immer `#000` als Hintergrund**, weiße Schrift, Atkinson wenn verfügbar.
- **Keine `options`.** Die Optionsleiste verkleinert die View. Fragen werden im
  Chat gestellt, nicht im Fenster.
- **Keine langen Erklärungen** im Canvas. Zwei Zeilen Kontext, dann die Sache.
- **Tap-Ziele ≥ 44 px**, auch wenn der sichtbare Punkt klein ist: Button groß,
  Punkt darin klein.
- **Kein Feedback vor dem Ende** bei Tests. Sonst ist es kein Test.

## Muster

### 1. Paarvergleich (A/B)

Zwei vollständige Screens oder zwei Bausteine nebeneinander, gleicher Inhalt.
Gut für „welche Richtung?". Schlecht für Details.

### 2. Varianten-Grid

5–20 Karten, jede mit derselben Mini-UI (Titel, Wert, Button, Chip, Zeile).
Gut für Form, Dichte, Kante. Immer **gleicher Inhalt** in allen Karten.

### 3. Blindtest (Farbsehschwäche)

Rotation und Grün sind bei Deuteranopie nicht über den Farbton trennbar, nur über
die **Helligkeit**. Deshalb:

- 6 Tests mit je 5 Paaren.
- Pro Paar links/rechts je ein Punkt: einer grün, einer rot, **zufällig verteilt**.
- Der Nutzer klickt in jeder Zeile den roten Punkt. Keine Rückmeldung.
- Punktgröße pro Test sinkt (44 → 18 px), damit man die Grenze findet.
- Am Ende: pro Test „richtig/5". Ab 5 von 6 fehlerfreien Tests gilt die Farbe
  als unterscheidbar.

### 4. Metrik-Filter

Große Kandidatenlisten (20 Rottöne) werden im Browser berechnet und gefiltert,
statt sie alle zu zeigen:

```js
function lum(hex) {
  const c = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

const contrast = (hex) => (lum(hex) + 0.05) / 0.05;
const deltaL = (a, b) => Math.abs(lum(a) - lum(b));
```

Regel für Rot/Grün: **ΔHelligkeit ≥ 0,15** zu jeder anderen Farbe im Satz.
Petrol liegt bei 0,38 — Rot muss also deutlich darunter oder darüber liegen.

## Ergebnis zurückholen

`show` gibt beim Schließen zwei Dinge zurück: **geklickte Buttons in Klick-Reihenfolge**
und Formularfelder. Beides ist brauchbar, aber nicht gleich zuverlässig:

- **Buttons sind der verlässliche Kanal.** Jede Auswahl als `<button>` bauen. Die
  Reihenfolge zeigt, was zuletzt geklickt wurde — also die eigentliche Entscheidung.
- **Formularfelder können hinterherhinken.** Ein 1-px/`opacity:0`-Textarea wird
  nicht sicher beim Schließen ausgelesen. Wenn ein Feld nötig ist: **sichtbar**
  lassen und groß genug, oder den Wert zusätzlich in ein sichtbares Feld schreiben.
- Bei Auswahl-Tests deshalb immer **beides**: klickbare Karten *und* eine sichtbare
  Zeile „Auswahl: …", die den letzten Klick bestätigt.

```html
<!-- verlässlich: der Klick selbst -->
<button class="card" type="button" data-name="02 Kante">…</button>

<!-- Bonus, sichtbar: bestätigt die Auswahl im Text -->
<div>Auswahl: <b id="chosen">—</b></div>
```

Bei mehreren Klicks hintereinander gilt der **letzte**. Wenn Klick-Reihenfolge und
Feldwert sich widersprechen, ist der Klickverlauf die Wahrheit — und die Rückfrage
beim Nutzer billiger als eine falsch umgesetzte Entscheidung.

## Nach der Entscheidung

- Route anlegen: `src/routes/taste/roundN/+page.svelte`.
- Urteil sichtbar in den Footer schreiben, nicht nur in den Chat.
- Tokens aktualisieren (`src/lib/tokens/color.css`), nicht die Experimente.
- Verlauf nie überschreiben: alte Runden bleiben unter ihrer Adresse stehen.
- `make build` und `make local-8008` prüfen, danach `make build` für `dist`.

## Fallen

- **Farbton allein reicht nie.** Immer Helligkeit, Form oder Text als zweiter
  Kanal mitdenken.
- **Keine Zwischenmeldung im Test.** Ein „richtig" nach jedem Klick macht den
  Test wertlos.
- **Keine Entscheidung im Chat erzwingen**, wenn ein Screen das schneller klärt.
- **Keine Variante heimlich empfehlen**, indem sie größer, heller oder weiter
  oben steht als die anderen.
