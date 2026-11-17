import { feedEntries } from '#lib/taste/feed-routes';

export const entries = () => feedEntries.map((entry) => ({ slug: entry.slug }));
