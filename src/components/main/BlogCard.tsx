










// import Image from 'next/image'
// import Link from 'next/link'
// import { PortableText } from '@portabletext/react'
// import { urlForImage } from '@/sanity/lib/image'
// import { Post, TextBlock } from '@/types/sanity'
// import { EyeIcon } from 'lucide-react'
// import { formatDate } from '@/lib/utils'
// import { Button } from '@/components/ui/button'

// interface BlogCardProps {
//   post: Post
// }

// export default function BlogCard({ post }: BlogCardProps) {
//   // Get the first paragraph block for excerpt
//   const excerptBlock = post.body.find(
//     (block): block is TextBlock => block._type === 'block' && block.style === 'normal'
//   )

//   return (
//     <li className="group dark:hover:bg-slate-900 border-[5px] border-green-600 py-6 px-5 rounded-[22px] shadow-200 hover:border-4 transition-all duration-500 hover:shadow-300 hover:bg-slate-200">
//       <div className="flex justify-between items-center">
//         <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full dark:group-hover:bg-slate-800 group-hover:bg-slate-300 dark:!text-white-100 text-black-200">
//           {formatDate(post.publishedAt)}
//         </p>
//         {/* <div className="flex gap-1.5">
//           <EyeIcon className="size-6 text-primary" />
//           <span className="font-medium text-[16px]">{post.views}</span>
//         </div> */}
//       </div>

//       {/* Content Section */}
//       <div className="flex justify-between items-center mt-5 gap-5">
//         {/* Post Title and Author */}
//         <div className="flex-1">
//           <Link href={`/user/${post.author?._id}`}>
//             <p className="font-medium text-[16px] line-clamp-1">
//               {post.author?.name?.toUpperCase()}
//             </p>
//           </Link>
//           <Link href={`/blog/${post.slug}`}>
//             <h3 className="font-semibold text-green-400 text-[26px] line-clamp-1">{post.title}</h3>
//           </Link>
//         </div>
//         <Link href={`/user/${post.author?._id}`}>
//           <div className="relative w-12 h-12">
//             <Image
//               src={urlForImage(post.author?.image).url()}
//               alt={post.author?.name || 'Author'}
//               fill
//               className="rounded-full object-cover"
//             />
//           </div>
//         </Link>
//       </div>

//       {/* Excerpt */}
//       {excerptBlock && (
//         <Link href={`/blog/${post.slug}`} className="block mt-2">
//           <p className="font-normal text-[16px] line-clamp-2 my-2 dark:text-white-100 text-black-300 break-all">
//             <PortableText
//               value={excerptBlock}
//               components={{
//                 block: {
//                   normal: ({ children }) => <p className="text-sm">{children}</p>,
//                 },
//               }}
//             />
//           </p>
//         </Link>
//       )}

//       {/* Post Image */}
//       {post.mainImage && (
//         <Link href={`/blog/${post.slug}`}>
//           <div className="relative w-full h-48 mt-4">
//             <Image
//               src={urlForImage(post.mainImage).url()}
//               alt={post.title || 'Post Image'}
//               fill
//               className="rounded-[10px] object-cover"
//               priority={false}
//             />
//           </div>
//         </Link>
//       )}

//       {/* Category and Details Button */}
//       <div className="flex justify-between items-center gap-3 mt-5">
//         <Link href={`/category/${post.categories?.[0]?._id}`}>
//           <p className="font-medium rounded-3xl px-4 py-2 bg-black-100 text-white hover:bg-black-300 text-[16px]">
//             {post.categories?.[0]?.title}
//           </p>
//         </Link>
//         <Button className="rounded-full bg-black-100 font-medium text-[16px] text-white px-5 py-3 !important" asChild>
//           <Link href={`/blog/${post.slug}`}>Details</Link>
//         </Button>
//       </div>
//     </li>
//   )
// }




import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import { Post, TextBlock } from '@/types/sanity'
import { EyeIcon } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  // Get the first paragraph block for excerpt
  const excerptBlock = post.body.find(
    (block): block is TextBlock => block._type === 'block' && block.style === 'normal'
  )

  return (
    <li className="group dark:hover:bg-slate-900 border-[5px] border-green-600 py-6 px-5 rounded-[22px] shadow-200 hover:border-4 transition-all duration-500 hover:shadow-300 hover:bg-slate-200">
      {/* Author Avatar and Date */}
      <div className="flex items-center gap-4">
        <Link href="/aboutme">
          <div className="relative w-12 h-12">
            <Image
              src={urlForImage(post.author?.image).url()}
              alt={post.author?.name || 'Author'}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </Link>
        <div className="flex flex-col">
          <Link href={`/user/${post.author?._id}`}>
            <p className="font-medium text-[16px]">{post.author?.name}</p>
          </Link>
          <p className="font-bold pl-0 text-[15px] text-gray-400">{formatDate(post.publishedAt)}</p>
        </div>
        {/* Optional Views */}
        {/* {post.views && (
          <div className="flex items-center gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="font-medium text-[16px]">{post.views}</span>
          </div>
        )} */}
      </div>

      {/* Post Title */}
      <Link href={`/blog/${post.slug}`}>
        <h3 className="font-semibold text-green-400 text-[24px] line-clamp-1 mt-4">{post.title}</h3>
      </Link>

      {/* Excerpt */}
      {excerptBlock && (
        <Link href={`/blog/${post.slug}`} className="block mt-2">
          <p className="font-normal text-[16px] line-clamp-2 my-2 dark:text-white-100 text-black-300 break-all">
            <PortableText
              value={excerptBlock}
              components={{
                block: {
                  normal: ({ children }) => <p className="text-sm">{children}</p>,
                },
              }}
            />
          </p>
        </Link>
      )}

      {/* Post Image */}
      {post.mainImage && (
        <Link href={`/blog/${post.slug}`}>
          <div className="relative w-full h-48 mt-4">
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.title || 'Post Image'}
              fill
              className="rounded-[10px] object-cover"
              priority={false}
            />
          </div>
        </Link>
      )}

      {/* Category Button and Details Button */}
      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/category/${post.categories?.[0]?.slug}`}>
          <p className="font-medium rounded-3xl px-4 py-2 bg-black-100 text-white bg hover:bg-green-700  bg-gray-900 text-[16px]">
            {post.categories?.[0]?.title}
          </p>
        </Link>
        <Button className="rounded-full bg-black-100 font-medium text-[16px] hover:bg-green-700  bg-gray-900 text-white px-5 py-3 !important" asChild>
          <Link href={`/blog/${post.slug}`}>Details</Link>
        </Button>
      </div>
    </li>
  )
}
