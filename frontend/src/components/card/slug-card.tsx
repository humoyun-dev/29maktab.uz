import React from "react";
import Image from "next/image";

const SlugCard: React.FC = () => {
  return (
    <div className={`group `}>
      <div className={`h-full w-full overflow-hidden rounded-lg`}>
        <Image
          src={`/images/apple.png`}
          alt={`lgo`}
          width={999}
          height={999}
          className={`object-cover h-[200px] rounded-lg group-hover:scale-110 duration-300`}
        />
      </div>
      <div>
        <h1>Lorem</h1>
        <p className={`text-gray-600 underline underline-offset-4`}>
          2023/12/7 00:48
        </p>
      </div>
    </div>
  );
};

export default SlugCard;
