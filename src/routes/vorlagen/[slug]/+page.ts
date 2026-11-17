import { vorlagen } from '#lib/vorlagen';

export const entries = () => vorlagen.map((vorlage) => ({ slug: vorlage.slug }));
