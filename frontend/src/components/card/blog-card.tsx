// Import statements
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BlogInterface } from "@/interfaces/blog/blog.interface";
import moment from "moment";

// BlogCard component definition
const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const router = useRouter();

  // Click event handler for navigating to the blog page
  const handleCardClick = async () => {
    await router.push(`/blog/${data.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col group cursor-pointer"
    >
      {/* Image Section */}
      <div className="overflow-hidden shadow-md rounded-lg">
        <Image
          priority={true}
          src={data.image}
          alt="Blog Image"
          width={999}
          height={999}
          className="rounded-lg w-full md:h-[200px] h-[150px] object-cover group-hover:scale-110 duration-300 bg-gray-500"
        />
      </div>

      {/* Blog Information Section */}
      <div className="flex items-start justify-between mt-1">
        <div className="md:w-2/12 hidden p-1">
          <Image src="/logo.png" alt="Logo" width={999} height={999} />
        </div>
        <div className="md:w-10/12 w-full">
          <h1 className="text font-[500]">{data.title}</h1>
          <p className="text-gray-600 underline underline-offset-4">
            {moment(data.created_at)
              .utcOffset("Asia/Tashkent")
              .format("YYYY/MM/DD, HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
};

// Default export
export default BlogCard;

// Props interface
interface BlogCardProps {
  data: BlogInterface;
}
