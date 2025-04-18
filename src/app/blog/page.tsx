
import { blogPageQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/main/BlogCard'
import { Post } from '@/types/sanity'
import Head from 'next/head'
export const revalidate = 60 // Revalidate every 60 seconds
export default async function BlogPage() {
  const { posts, categories } = await blogPageQuery.fetch() as { posts: Post[]; categories: { _id: string; slug: string; title: string; description?: string }[] }

  return (
    
  <>
  
<Head>
  <title>Blog | Latest Insights on [DSA with paython | Agentic AI | Learning]</title>
  <meta 
    name="description" 
    content="Explore expert articles on [DSA with paython | Agentic AI | Learning]. Learn about [topics] and stay updated with the latest trends." 
  />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "headline": "Blog | [Your Brand]",
      "description": "Latest insights on [your niche].",
      "url": "https://muazammughal.me/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Muazam MUghal",
        "logo": {
          "@type": "ImageObject",
          "url": "https://muazammughal.com/NewAvatar.png"
        }
      }
    })}
  </script>
</Head>
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-5xl font-bold text-center pb-8  tracking-wider text-green-500 mb-8">
        BLOG
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog Posts Section */}
        <section className="w-full lg:w-3/4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {posts.length > 0 ? (
              posts.map((post : any) => <BlogCard key={post._id} post={post} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">
                No posts found
              </p>
            )}
          </ul>
        </section>

        {/* Categories Section */}
        <section className="w-full lg:w-1/4 lg:border-l-2 lg:border-green-200 lg:pl-6">
          <div className="sticky top-4">
            <h3 className="text-2xl text-green-600 font-bold mb-4">
            My Journeys 
            </h3>
            {categories.length > 0 ? (
              <ul className="space-y-4">
                {categories.map((category : any) => (
                  <li key={category._id} className="group">
                    <a
                      href={`/category/${category.slug}`}
                      className="flex flex-col p-3 rounded-lg hover:bg-green-300 transition-colors "
                    >
                      <h3 className="text-green-600 font-bold group-hover:text-green-900">
                        {category.title}
                      </h3>
                      {category.description && (
                        <p className="text-gray-600 text-sm mt-1">
                          {category.description}
                        </p>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No categories found</p>
            )}
          </div>
        </section>
      </div>
    </div>
    </>
  )
}