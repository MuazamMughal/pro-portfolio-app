
//         )}
//         <div>
//           <p className="font-medium text-gray-900">{post.author.name}</p>
//           <div className="flex gap-2 mt-1">
//             {post.categories.map((category) => (
//               <span
//                 key={category._id}
//                 className="text-xs px-2 py-1 rounded-full"
//                 style={{
//                   backgroundColor: category.color || '#E0F2FE',
//                   color: category.color ? '#FFF' : '#0369A1',
//                 }}
//               >
//                 {category.title}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Body Content */}
//       <div className="prose prose-lg max-w-none">
//         <PortableText
//           value={post.body}
//           components={{
//             types: {
//               image: ({ value }) => (
//                 <figure className="my-6">
//                   <div className="relative aspect-video rounded-lg overflow-hidden">
//                     <Image
//                       src={urlForImage(value).width(800).url()}
//                       alt={value.alt || ''}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   {value.caption && (
//                     <figcaption className="text-center text-sm text-gray-500 mt-2">
//                       {value.caption}
//                     </figcaption>
//                   )}
//                 </figure>
//               ),
//               code: ({ value }) => (
//                 <SyntaxHighlighterComponent
//                   language={value.language || 'text'}
//                   value={value.code}
//                 />
//               ),
//             },
//             block: {
//               h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
//               h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
//               h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
//               normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
//               blockquote: ({ children }) => (
//                 <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
//                   {children}
//                 </blockquote>
//               ),
//             },
//             marks: {
//               link: ({ children, value }) => (
//                 <a
//                   href={value.href}
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {children}
//                 </a>
//               ),
//               strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
//               em: ({ children }) => <em className="italic">{children}</em>,
//               code: ({ children }) => <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{children}</code>,
//             },
//           }}
//         />
//       </div>S
//     </article>
//   )
// }


// import Image from 'next/image'
// import { PortableText } from '@portabletext/react'
// import { urlForImage } from '@/sanity/lib/image'
// import { format } from 'date-fns'
// import type { Post } from '@/types/sanity'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs' // Import a theme from react-syntax-highlighter

// interface PostProps {
//   post: Post
// }

// export function Post({ post }: PostProps) {
//   return (
//     <article className="max-w-3xl mx-auto px-4 py-8">
//       {/* Date */}
//       <time 
//         dateTime={post.publishedAt} 
//         className="block text-sm text-gray-500 mb-2"
//       >
//         {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
//       </time>

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

//       {/* Featured Image */}
//       {post.mainImage && (
//         <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
//           <Image
//             src={urlForImage(post.mainImage).width(1200).url()}
//             alt={ post.title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>
//       )}

//       {/* Author and Categories */}
//       <div className="flex items-center gap-4 mb-8">
//         {post.author?.image && (
//           <div className="relative w-10 h-10 rounded-full overflow-hidden">
//             <Image
//               src={urlForImage(post.author.image).width(100).url()}
//               alt={post.author.name}
//               fill
//               className="object-cover"
//             />
//           </div>
//         )}
//         <div>
//           <p className="font-medium text-gray-900">{post.author.name}</p>
//           <div className="flex gap-2 mt-1">
//             {post.categories.map((category) => (
//               <span
//                 key={category._id}
//                 className="text-xs px-2 py-1 rounded-full"
//                 style={{
//                   backgroundColor: category.color || '#E0F2FE',
//                   color: category.color ? '#FFF' : '#0369A1',
//                 }}
//               >
//                 {category.title}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Body Content */}
//       <div className="prose prose-lg max-w-none">
//         <PortableText
//           value={post.body}
//           components={{
//             types: {
//               image: ({ value }) => (
//                 <figure className="my-6">
//                   <div className="relative aspect-video rounded-lg overflow-hidden">
//                     <Image
//                       src={urlForImage(value).width(800).url()}
//                       alt={value.alt || ''}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   {value.caption && (
//                     <figcaption className="text-center text-sm text-gray-500 mt-2">
//                       {value.caption}
//                     </figcaption>
//                   )}
//                 </figure>
//               ),
//               code: ({ value }) => (
//                 <SyntaxHighlighter language={value.language || 'text'} style={docco}>
//                   {value.code}
//                 </SyntaxHighlighter>
//               ),
//             },
//             block: {
//               h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
//               h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
//               h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
//               normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
//               blockquote: ({ children }) => (
//                 <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
//                   {children}
//                 </blockquote>
//               ),
//             },
//             marks: {
//               link: ({ children, value }) => (
//                 <a
//                   href={value.href}
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {children}
//                 </a>
//               ),
//               strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
//               em: ({ children }) => <em className="italic">{children}</em>,
//               code: ({ children }) => <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{children}</code>,
//             },
//           }}
//         />
//       </div>
//     </article>
//   )
// }





// import Image from 'next/image'
// import { PortableText } from '@portabletext/react'
// import { urlForImage } from '@/sanity/lib/image'
// import { format } from 'date-fns'
// import type { Post } from '@/types/sanity'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// interface PostProps {
//   post: Post
// }

// export function Post({ post }: PostProps) {
//   return (
//     <article className="max-w-5xl mx-auto px-4 py-8">
//       {/* Title - Centered at Top */}
//       <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
//         {post.title}
//       </h1>

//       {/* Publication Date - Centered below title */}
//       <time 
//         dateTime={post.publishedAt} 
//         className="block text-sm text-gray-500 text-center mb-4"
//       >
//         {`( ${format(new Date(post.publishedAt), 'MMMM d, yyyy')} )`}
//       </time>

//       {/* Featured Image */}
//       {post.mainImage && (
//         <div className="relative aspect-video w-full m-8 rounded-lg overflow-hidden">
//           <Image
//             src={urlForImage(post.mainImage).width(1200).url()}
//             alt={post.title}
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>
//       )}

//       {/* Author and Category Row */}
//       <div className="flex justify-between items-center m-12">
//         {/* Author Info - Left Side */}
//         <div className="flex items-center gap-4">
//           {post.author?.image && (
//             <div className="relative w-12 h-12 rounded-full overflow-hidden">
//               <Image
//                 src={urlForImage(post.author.image).width(150).url()}
//                 alt={post.author.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           )}
//           <p className="font-medium mt-2 text-green-400">{post.author.name}</p>
//         </div>

//         {/* Categories - Right Side */}
//         {post.categories.length > 0 && (
//           <div className="flex gap-2">
//             {post.categories.map((category) => (
//               <span
//                 key={category._id}
//                 className="bfont-medium rounded-3xl px-4 py-2 bg-black-100 text-white bg hover:bg-green-700  bg-gray-900 text-[16px] "
                
//               >
//                 {category.title}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Body Content */}
//       <div className="prose prose-lg max-w-none">
//         <PortableText
//           value={post.body}
//           components={{
//             types: {
//               image: ({ value }) => (
//                 <figure className="my-6">
//                   <div className="relative aspect-video rounded-lg overflow-hidden">
//                     <Image
//                       src={urlForImage(value).width(800).url()}
//                       alt={value.alt || ''}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   {value.caption && (
//                     <figcaption className="text-center text-sm text-gray-500 mt-2">
//                       {value.caption}
//                     </figcaption>
//                   )}
//                 </figure>
//               ),
//               code: ({ value }) => (
//                 <SyntaxHighlighter language={value.language || 'text'} style={docco}>
//                   {value.code}
//                 </SyntaxHighlighter>
//               ),
//             },
//             block: {
//               h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
//               h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
//               h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
//               normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
//               blockquote: ({ children }) => (
//                 <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
//                   {children}
//                 </blockquote>
//               ),
//             },
//             marks: {
//               link: ({ children, value }) => (
//                 <a
//                   href={value.href}
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {children}
//                 </a>
//               ),
//               strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
//               em: ({ children }) => <em className="italic">{children}</em>,
//               code: ({ children }) => <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{children}</code>,
//             },
//           }}
//         />
//       </div>
//     </article>
//   )
// }