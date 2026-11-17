import { directoryEntries } from '#lib/taste/directory-routes';

export const entries = () => directoryEntries.map((entry) => ({ slug: entry.slug }));
