import 'server-only';
import { createClient } from 'newt-client-js';
import { cache } from 'react';
import type { AppMeta, GetContentsQuery } from 'newt-client-js';
import type { Important } from '@/types/important';

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID + '',
  token: process.env.NEXT_PUBLIC_NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
});

export const getApp = cache(async (): Promise<AppMeta> => {
  const app = await client.getApp({
    appUid: 'important',
  });
  return app;
});

export const getImportants = cache(async (query?: GetContentsQuery): Promise<{ displays: Important[]; total: number }> => {
  const { items: displays, total } = await client.getContents<Important>({
    appUid: 'important',
    modelUid: 'content-984753',
    query: {
      depth: 2,
      ...query,
    },
  });
  return {
    displays,
    total,
  };
});


export const getPage = cache(async (slug: string): Promise<Important | null> => {
  if (!slug) return null;

  const content = await client.getFirstContent<Important>({
    appUid: 'important',
    modelUid: 'content-984753',
    query: {
      depth: 2,
      slug,
    },
  });
  return content;
});
