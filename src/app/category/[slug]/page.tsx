// import { getCategoryWithPosts } from '@/sanity/lib/queries'
// import { CategoryPostCard } from '@/components/main/CategoryPostCard'

// interface CategoryPageProps {
//   params: {
//     slug: string
//   }
// }

// export default async function CategoryPage({ params }: CategoryPageProps) {
//   const { category, posts } = await getCategoryWithPosts(params.slug)

//   if (!category) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-12 text-center">
//         <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 ">
//       {/* Category Header */}
//       <header className="mb-1 flex flex-col items-center justify-center text-center">
//         <h1 className="text-4xl font-bold my-12 text-green-500 mb-4">{category.title}</h1>
//         {category.description && (
//           <p className="text-lg  my-8 text-gray-400 dark:text-gray-600 max-w-4xl text-center">{category.description}</p>
//         )}
//       </header>

//       <h2 className="text-3xl text-center font-bold  text-green-800 mb-12">Related Posts</h2>

//       {/* Posts List */}
//       <div className="space-y-8">
//         {posts.length > 0 ? (
//           posts.map((post) => (
//             <CategoryPostCard key={post._id} post={post} />
//           ))
//         ) : (
//           <p className="text-gray-500 text-center py-12">
//             No posts found in this category
//           </p>
//         )}
//       </div>
//     </div>
//   )
// }