import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { format } from 'date-fns';
import { PostPreview } from '@/types/sanity';

interface CategoryPostCardProps {
  post: PostPreview;
}

export function CategoryPostCard({ post }: CategoryPostCardProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300  md:max-w-5xl md:mx-32 lg:max-w-6xl lg:mx-8 md:h-56 lg:h-64 ">
      {/* Left side - Image section (3/4 width) */}
      <div className="relative w-full md:w-3/4 h-32 sm:h-56 md:h-56 lg:h-64">
        <img
          src={urlForImage(post.mainImage).width(1000).url()}
          alt={post.title}
          className="object-cover w-full h-full "


        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="self-start    sm:px-4 sm:py-2  text-xs sm:text-sm transition-colors
            rounded-full bg-black-100 font-medium text-[16px] hover:bg-green-700  bg-gray-900 text-white px-5 py-3"
          
          >
            Read Now
          </Link>
        </div>
      </div>

      {/* Right side - Author and Metadata (1/4 width) */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-2 sm:p-4 bg-gray-100  hover:bg-green-200 border-2 border-gray-200 h-42 sm:h-56 md:h-64 lg:h-72">
        {/* Author Info */}
        <div className="flex flex-col items-center">
          {post.author?.image && (
            <img
              src={urlForImage(post.author.image).width(100).url()}
              alt={post.author.name}
              width={60}
              height={60}
              className="rounded-full mb-1 sm:mb-2 border-2 hover:ring-popover border-white shadow-lg "

            />
          )}
          <span className="text-gray-700  text-center font-bold line-clamp-1">
            {post.author.name}
          </span>
        </div>

        {/* Views Count */}
        {/* <div className="flex items-center text-gray-500 mt-2 sm:mt-4 text-xs sm:text-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 sm:h-4 sm:w-4 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          </svg>
          {post.views.toLocaleString()}
        </div> */}

        {/* Created Date */}
        <div className="text-gray-500 mt-1  font-semibold text-sm">
          {format(new Date(post.publishedAt), 'MMM d, yyyy')}
        </div>
      </div>
    </div>
  );
}
