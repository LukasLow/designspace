import { toolbarEntries } from '#lib/taste/toolbar-routes';

export const entries = () => toolbarEntries.map((entry) => ({ slug: entry.slug }));
