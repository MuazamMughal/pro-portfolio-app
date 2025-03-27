// export interface Author {
//     _id: string
//     name: string
//     slug: string
//     image?: string
//   }
  
//   export interface Category {
//     _id: string
//     title: string
//     description?: string
//     slug: string
//     color?: string
//   }
  
//   interface ImageBlock {
//     _type: "image"
//     url: string
//     alt: string
//   }
  
//   interface CodeBlock {
//     _type: "code"
//     code: string
//     language: string
//   }
  
//   interface TextBlock {
//     _type: "block"
//     style: "normal" | "h1" | "h2" | "h3" | "blockquote"
//     children: Array<{
//       _type: "span"
//       text: string
//       marks?: string[]
//     }>
//   }
  
//   export type BodyBlock = TextBlock | ImageBlock | CodeBlock
  
//   export interface Post {
//     _id: string
//     _createdAt: string
//     _updatedAt: string
//     title: string
//     slug: string
//     publishedAt: string
//     mainImage?: string
//     alt?: string
//     author: Author
//     categories: Category[]
//     body: BodyBlock[]
//     tags?: string[]
//   }

export interface Author {
    _id: string
    name: string
    slug: string
    image?: string
  }
  
  export interface Category {
    _id: string
    title: string
    description?: string
    slug: string
    color?: string
  }
  
  interface ImageBlock {
    _type: "image"
    url: string
    alt: string
  }
  
  interface CodeBlock {
    _type: "code"
    code: string
    language: string
  }
  
  interface TextBlock {
    _type: "block"
    style: "normal" | "h1" | "h2" | "h3" | "blockquote"
    children: Array<{
      _type: "span"
      text: string
      marks?: string[]
    }>
  }
  
  export type BodyBlock = TextBlock | ImageBlock | CodeBlock
  
  export interface Post {
    _id: string
    _createdAt: string
    _updatedAt: string
    title: string
    slug: string
    publishedAt: string
    mainImage?: string
    alt?: string
    author: Author
    categories: Category[]
    body: BodyBlock[]
    tags?: string[]
  }
  export interface SanityImage {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
      url: string
      metadata?: {
        dimensions: {
          width: number
          height: number
          aspectRatio: number
        }
        lqip: string
      }
    }
    alt?: string
    caption?: string
  }
  
  export interface Author {
    _id: string
    name: string
    slug: string
    image?: SanityImage
  }
  
  export interface Category {
    _id: string
    title: string
    slug: string
    color?: string
  }
  
  interface ImageBlock {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
    caption?: string
  }
  
  interface CodeBlock {
    _type: 'code'
    code: string
    language: string
  }
  
  interface TextBlock {
    _type: 'block'
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
    children: Array<{
      _type: 'span'
      text: string
      marks?: string[]
    }>
    markDefs?: Array<{
      _type: 'link'
      href: string
    }>
  }
  
  export type BodyBlock = TextBlock | ImageBlock | CodeBlock
  
  export interface Post {
    _id: string
    title: string
    slug: string
    publishedAt: string
    mainImage?: SanityImage
    author: Author
    categories: Category[]
    body: BodyBlock[]
  }

  export interface SanityImage {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
      url: string
      metadata?: {
        dimensions: {
          width: number
          height: number
          aspectRatio: number
        }
        lqip: string
      }
    }
    alt?: string
  }
  
  export interface Author {
    _id: string
    name: string
    slug: string
    image?: SanityImage
  }
  
  export interface Category {
    _id: string
    title: string
    slug: string
    description?: string
    color?: string
  }
  
  export interface PostPreview {
    _id: string
    title: string
    slug: string
    publishedAt: string
    excerpt?: string
    mainImage?: SanityImage
    author: Author
    categories: Category[]
  }