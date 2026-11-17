import { articleEntries } from '#lib/taste/article-routes';

export const entries = () => articleEntries.map((entry) => ({ slug: entry.slug }));
