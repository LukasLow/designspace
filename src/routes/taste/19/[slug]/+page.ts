import { chatEntries } from '#lib/taste/chat-routes';

export const entries = () => chatEntries.map((entry) => ({ slug: entry.slug }));
