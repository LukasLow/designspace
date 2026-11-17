import { financeEntries } from '#lib/taste/finance-routes';

export const entries = () => financeEntries.map((entry) => ({ slug: entry.slug }));
