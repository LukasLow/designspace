/** Kandidaten für die sechste Farbe (Runde 7). */

export interface ExtraColor {
  key: string;
  no: string;
  name: string;
  hex: string;
  ink: string;
  contrast: string;
  note: string;
  risk: string;
}

export const extraColors: ExtraColor[] = [
  {
    key: 'violett',
    no: '01',
    name: 'Violett',
    hex: '#C4A4FF',
    ink: '#1A0E2E',
    contrast: '10,1:1',
    note: 'Der einzige Ton, der weit von allen fünf anderen weg ist. Gut für Kategorien und Reihen.',
    risk: 'Kein Risiko im Satz — nur die Frage, ob du Lila überhaupt willst.'
  },
  {
    key: 'pink',
    no: '02',
    name: 'Pink',
    hex: '#FF8AD1',
    ink: '#2A0A1C',
    contrast: '9,8:1',
    note: 'Kräftig und eigenständig, aber im gleichen Familienfeld wie Rot.',
    risk: 'Bei Farbsehschwäche rutscht Pink nah an Rot. Als Fehlerfarbe unbrauchbar.'
  },
  {
    key: 'sand',
    no: '03',
    name: 'Sand',
    hex: '#DCC9A3',
    ink: '#1A1206',
    contrast: '12,9:1',
    note: 'Warm und redaktionell. Der Ton aus Statuna look3.',
    risk: 'Nah an Gold. Zwei warme Töne direkt nebeneinander verwischen.'
  },
  {
    key: 'tuerkis',
    no: '04',
    name: 'Türkis',
    hex: '#2FE0D0',
    ink: '#00201D',
    contrast: '12,7:1',
    note: 'Sitzt genau zwischen Neon und Powerade — die Brücke der beiden.',
    risk: 'Zu nah an beiden. Als eigene Bedeutung kaum unterscheidbar.'
  },
  {
    key: 'orange',
    no: '05',
    name: 'Orange',
    hex: '#FF9F43',
    ink: '#241203',
    contrast: '10,3:1',
    note: 'Zwischen Gold und Rot. Würde „Achtung" von „Fehler" trennen.',
    risk: 'Drei warme Töne (Gold, Orange, Rot) machen die Bedeutung unscharf.'
  }
];
