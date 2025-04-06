
import { defineQuery } from 'next-sanity' 
import { Post, Category, PostPreview } from '@/types/sanity'
export const postsQuery = defineQuery(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      "author": author->{
        _id,
        name,
        "slug": slug.current,
        image {
          asset->{
            _id,
            url
          }
        }
      },
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current,
        description,
        color
      },
      body[]{
        ...,
        _type == "image" => {
          asset->{
            _id,
            url
          },
          alt
        },
        _type == "code" => {
          code,
          language
        }
      },
      tags
    }
  `)

// Categories query
export const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description,
    "slug": slug.current,
    color
  }
`)

// Combined queries
// This query fetches both posts and categories in parallel
// and returns them as an object with two properties: posts and categories.

export const blogPageQuery = {
  posts: postsQuery,
  categories: categoriesQuery,
  fetch: async () => {
    const [posts, categories] = await Promise.all([
      client.fetch(postsQuery),
      client.fetch(categoriesQuery),
    ])
    return { posts, categories }
  },
}


import { groq } from 'next-sanity'


export async function getPost(slug: string): Promise<Post> {
  return client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage {
        ...,
        asset->{
          ...,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      "author": author->{
        _id,
        name,
        "slug": slug.current,
        image {
          ...,
          asset->{
            ...,
            metadata {
              dimensions,
              lqip
            }
          }
        }
      },
      "categories": categories[]->{
        _id,
        title,
        "slug": slug.current,
        color
      },
      body[] {
        ...,
        _type == "image" => {
          ...,
          asset->{
            ...,
            metadata {
              dimensions,
              lqip
            }
          }
        },
        _type == "code" => {
          ...,
          code,
          language
        }
      }
    }
  `, { slug })
}






import { client } from './client'

export async function getCategoryWithPosts(slug: string): Promise<{
  category: Category
  posts: PostPreview[]
}> {
  return client.fetch(groq`
    {
      "category": *[_type == "category" && slug.current == $slug][0] {
        _id,
        title,
        description,
        "slug": slug.current,
        color
      },
      "posts": *[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage {
          ...,
          asset->{
            ...,
            metadata {
              dimensions,
              lqip
            }
          }
        },
        "author": author->{
          _id,
          name,
          "slug": slug.current,
          image {
            ...,
            asset->{
              ...,
              metadata {
                dimensions,
                lqip
              }
            }
          }
        },
        "categories": categories[]->{
          _id,
          title,
          "slug": slug.current,
          color
        }
      }
    }
  `, { slug })
}