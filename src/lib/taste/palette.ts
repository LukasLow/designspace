/** Palette-Kandidat aus Runde 5: Neon + Powerade, plus Rot, Gold, Weiß. */

export interface PaletteEntry {
  key: string;
  name: string;
  hex: string;
  role: string;
  contrast: string;
}

export const palette: PaletteEntry[] = [
  {
    key: 'neon',
    name: 'Neon',
    hex: '#00E89A',
    role: 'Handlung, Erfolg',
    contrast: '13,0:1'
  },
  {
    key: 'blue',
    name: 'Powerade',
    hex: '#00A8E8',
    role: 'Information, Link',
    contrast: '7,8:1'
  },
  {
    key: 'gold',
    name: 'Gold',
    hex: '#FFC24B',
    role: 'Warnung, Hinweis',
    contrast: '13,1:1'
  },
  {
    key: 'red',
    name: 'Rot',
    hex: '#FF6B6B',
    role: 'Fehler, Gefahr',
    contrast: '7,6:1'
  },
  {
    key: 'white',
    name: 'Weiß',
    hex: '#FFFFFF',
    role: 'Text, Hauptaktion',
    contrast: '21,0:1'
  },
  {
    key: 'dim',
    name: 'Sekundär',
    hex: '#D4D4D4',
    role: 'Sekundärtext',
    contrast: '14,6:1'
  }
];
