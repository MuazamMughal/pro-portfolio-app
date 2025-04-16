import { getPost } from '@/sanity/lib/queries'
import { Post } from '@/components/main/Post'
import { Metadata, ResolvingMetadata } from 'next'
interface PostPageProps {
  params: {
    slug: string
  }
}




// Dynamic metadata generation
export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug)
  const previousImages = (await parent).openGraph?.images || []
  




  // Generate schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Admin"
    },
    "image": post.mainImage?.asset?.url,
    "publisher": {
      "@type": "Organization",
      "name": "Muazam Mughal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://muazammughal/NewAvatar.png"
      }
    }
  }



  return {
    title: `${post.title} | Your Blog Name`,
    description: post.excerpt || post.metaDescription || 'A blog post about ' + post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.metaDescription || '',
      url: `https://muazammughal.me/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author?.name || 'Admin'],
      images: [post.mainImage?.asset?.url, ...previousImages],
    },
    alternates: {
      canonical: `https://muazammuaghal.com/blog/${params.slug}`,
    },
  }
}




export const revalidate = 60 // revalidate every minute

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
      </div>
    )
  }

  return <Post post={post} />
}