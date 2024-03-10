import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CustomImageProps {
  src: string;
  className: string;
  alt: string;
  onClick?: any;
}

const CustomImage: React.FC<CustomImageProps> = ({
  className,
  src,
  alt,
  onClick,
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      onClick={onClick}
      src={src}
      alt={alt}
      width={999}
      height={999}
      className={twMerge(
        `duration-700 ease-in-out group-hover:opacity-75 ${
          loading
            ? "scale-100 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }}`,
        className,
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default CustomImage;