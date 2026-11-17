/** Rollenmodelle: wie laut spricht Farbe? */

export type RoleModel = 'marke' | 'weiss' | 'blau' | 'raender' | 'punkte';

export const roleModels: Array<{
  key: RoleModel;
  no: string;
  title: string;
  note: string;
}> = [
  {
    key: 'marke',
    no: '01',
    title: 'Marke führt',
    note: 'Neon ist die Hauptaktion, Weiß bleibt Text. Grün bedeutet gleichzeitig Handlung und Erfolg.'
  },
  {
    key: 'weiss',
    no: '02',
    title: 'Weiß führt',
    note: 'Die Hauptaktion ist Weiß — der stärkste Kontrast. Neon ist dann nur noch Erfolg.'
  },
  {
    key: 'blau',
    no: '03',
    title: 'Blau führt',
    note: 'Powerade trägt die Hauptaktion. Neon bleibt Erfolg, Blau ist Handlung und Link zugleich.'
  },
  {
    key: 'raender',
    no: '04',
    title: 'Ränder statt Flächen',
    note: 'Farbe nur als Kante und Text, nie als Füllung. Ruhiger, aber Status fällt weniger auf.'
  },
  {
    key: 'punkte',
    no: '05',
    title: 'Punkte statt Farbe',
    note: 'Nur ein farbiger Punkt trägt den Status, der Text bleibt weiß. Am leisesten — und am robustesten.'
  }
];
