import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const BlogCard: React.FC = () => {
  const router = useRouter();

  const item =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div
      onClick={() => router.push(`/blog/sdfg`)}
      className={`flex flex-col group cursor-pointer`}
    >
      <div className={`overflow-hidden shadow-md rounded-lg`}>
        <Image
          src={`/images/apple.png`}
          alt={"aldf"}
          width={999}
          height={999}
          className={`rounded-lg w-full group-hover:scale-110 duration-300 bg-gray-500`}
        />
      </div>
      <div className={`flex items-start justify-between`}>
        <div className={`w-2/12 p-1`}>
          <Image src={"/logo.png"} alt={"logo"} width={999} height={999} />
        </div>
        <div className={`w-10/12 `}>
          <h1 className={`text font-[500]`}>
            Сионизм тарихидаги яширин ҳақиқатлар | Абдуллоҳ Шариф
          </h1>
          <p className={`text-gray-600 underline underline-offset-4`}>
            2023/12/7 00:48
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
