import { stateEntries } from '#lib/taste/state-routes';

export const entries = () => stateEntries.map((entry) => ({ slug: entry.slug }));
