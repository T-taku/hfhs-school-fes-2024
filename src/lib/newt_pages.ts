import "server-only"
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import type { AppMeta, GetContentsQuery } from 'newt-client-js'
import type { Article } from '@/types/pages'
import { Category } from "@/types/category"

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID + '',
  token: process.env.NEXT_PUBLIC_NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getApp = cache(async (): Promise<AppMeta> => {
  const app = await client.getApp({
    appUid: "forvisitor",
  })
  return app
})

export const getPages = cache(
  async (
    query?: GetContentsQuery,
  ): Promise<{ articles: Article[]; total: number }> => {
    const { items: articles, total } = await client.getContents<Article>({
      appUid: "forvisitor",
      modelUid: "article",
      query: {
        depth: 2,
        ...query
      },
    })
    return {
      articles,
      total,
    }
  },
)

export const getPage = cache(
  async (slug: string): Promise<Article | null> => {
    if (!slug) return null

    const article = await client.getFirstContent<Article>({
      appUid: "forvisitor",
      modelUid: "article",
      query: {
        depth: 2,
        slug,
      },
    })
    return article
  },
)

export const getCategories = cache(async (): Promise<Category[]> => {
  const { items: categories } = await client.getContents<Category>({
    appUid: "forvisitor",
    modelUid: "category",
    query: {
      order: ['_sys.customOrder'],
    },
  })

  const { items: articles } = await client.getContents<{
    categories: string
  }>({
    appUid: "forvisitor",
    modelUid: "category",
    query: {
      depth: 0,
      select: ['name', "slug"],
    },
  })

  const getCategoryCount = (category: Category) => {
    return articles.filter((article) => {
      return article.categories.includes(category._id)
    }).length
  }

  const validCategories = categories.filter((category) => {
    // 1件も記事のないカテゴリは除外
    return getCategoryCount(category) > 0
  })

  return validCategories
})

export const getCategory = cache(
  async (slug: string): Promise<Category | null> => {
    if (!slug) return null

    const category = await client.getFirstContent<Category>({
      appUid: "forvisitor",
      modelUid: "category",
      query: {
        slug,
      },
    })
    return category
  },
)