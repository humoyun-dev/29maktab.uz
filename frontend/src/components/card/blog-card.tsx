import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const BlogCard: React.FC = () => {
  const router = useRouter();

  const item =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className={`border relative shadow rounded-lg group`}>
      <span
        className={`absolute top-1 backdrop-blur-xl px-3 left-1 bg-white/50 rounded-lg `}
      >
        24/11/2023 21:19
      </span>
      <Image
        onClick={() => router.push(`/blog/bugun-activmiz`)}
        src={`/images/product-image.png`}
        className={`rounded-lg group-hover:scale-110 duration-300 shadow object-cover w-full h-96 hover:cursor-pointer`}
        alt={`image`}
        width={999}
        height={999}
      />
      <div
        className={`absolute bottom-0 group-hover:z-[999] -z-[999] group-hover:-translate-y-0 duration-300 translate-y-[400px] w-full bg-white/50 backdrop-blur-xl rounded-lg py-1 px-3`}
      >
        <h4 className={`text-xl font-semibold`}>What is Lorem Ipsum?</h4>
        <p className={`text-sm`}>
          {item.length > 250 ? `${item.substring(0, 250)}...` : item}
        </p>
        <button
          onClick={() => router.push(`/blog/bugun-activmiz`)}
          className={`w-full bg-black text-white text-lg rounded my-2 `}
        >{`Ko'proq`}</button>
      </div>
    </div>
  );
};

export default BlogCard;
