import { docs } from '#lib/components/docs';

export const entries = () => docs.map((doc) => ({ slug: doc.slug }));
