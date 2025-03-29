import { getPost } from '@/sanity/lib/queries'
import { Post } from '@/components/main/Post'

interface PostPageProps {
  params: {
    slug: string
  }
}

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