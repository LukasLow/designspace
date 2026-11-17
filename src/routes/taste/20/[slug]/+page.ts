import { registerEntries } from '#lib/taste/register-routes';

export const entries = () => registerEntries.map((entry) => ({ slug: entry.slug }));
