import React from "react";
import { BookInterface } from "@/interfaces/book/book.interface";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/api.json";

const BookCard: React.FC<BookCardProps> = ({ book, is }) => {
  const router = useRouter();
  return (
    <div
      className={`cursor-pointer group rounded hover:shadow duration-300 border`}
    >
      <div
        onClick={() => router.push(`/library/book/${book.slug}`)}
        className={`overflow-hidden`}
      >
        {is ? (
          <Image
            src={`${api.api}${book.cover_image}`}
            alt={book.slug}
            width={999}
            height={999}
            className={`w-full h-[300px] object-cover group-hover:scale-125 duration-300 bg-gray-500`}
          />
        ) : (
          <Image
            src={book.cover_image}
            alt={book.slug}
            width={999}
            height={999}
            className={`w-full h-[300px] object-cover group-hover:scale-125 duration-300 bg-gray-500`}
          />
        )}
      </div>
      <div className={`mt-2 px-2 pb-2`}>
        <h4
          onClick={() => router.push(`/library/book/${book.slug}`)}
          className={`font-semibold text-[20px]`}
        >
          {book.name}
        </h4>
        <ul className={`flex gap-x-2 text-sm text-gray-700 mt-1`}>
          <li>{`Bo'limlar:`}</li>
          <li>
            <Link
              href={`/library/category/${book.category_slug}`}
              className={`hover:underline underline-offset-4`}
            >
              {book.category_name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCard;

interface BookCardProps {
  book: BookInterface;
  is?: boolean;
}
