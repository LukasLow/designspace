import { landingEntries } from '#lib/taste/landing-routes';

export const entries = () => landingEntries.map((entry) => ({ slug: entry.slug }));
