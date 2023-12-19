import React from "react";
import Image from "next/image";
import { BlogInterface } from "@/interfaces/blog/blog.interface";
import moment from "moment";
import { useRouter } from "next/router";

const SlugCard: React.FC<SlugCardProps> = ({ data }) => {
  const router = useRouter();

  const handleCardClick = async () => {
    await router.push(`/blog/${data.slug}`);
    router.reload();
  };

  return (
    <div className="group cursor-pointer" onClick={handleCardClick}>
      {/* Image Section */}
      <div className="h-full w-full overflow-hidden rounded-lg">
        <Image
          src={data.image}
          alt="Blog Image"
          width={999}
          height={999}
          priority={true}
          className="object-cover h-[200px] rounded-lg group-hover:scale-110 duration-300"
        />
      </div>

      {/* Blog Information Section */}
      <div>
        <h1 className="font-semibold my-1">{data.title}</h1>
        <p className="text-gray-600 underline underline-offset-4">
          {moment(data.created_at)
            .utcOffset("Asia/Tashkent")
            .format("YYYY/MM/DD, HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default SlugCard;

interface SlugCardProps {
  data: BlogInterface;
}
