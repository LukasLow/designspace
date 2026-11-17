import { profileEntries } from '#lib/taste/profile-routes';

export const entries = () => profileEntries.map((entry) => ({ slug: entry.slug }));
