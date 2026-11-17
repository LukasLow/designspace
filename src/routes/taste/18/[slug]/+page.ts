import { loginEntries } from '#lib/taste/login-routes';

export const entries = () => loginEntries.map((entry) => ({ slug: entry.slug }));
