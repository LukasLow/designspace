import { directions } from '#lib/taste/registry';

// Jede Richtung wird vorgerendert, damit der Vergleich ohne Server läuft.
export const entries = () => directions.map((direction) => ({ slug: direction.slug }));
