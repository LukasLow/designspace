import { densityEntries } from '#lib/taste/density-routes';

export const entries = () => densityEntries.map((entry) => ({ slug: entry.slug }));
