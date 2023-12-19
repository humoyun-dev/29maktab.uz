import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/layout/layout";
import Link from "next/link";
import { Input } from "@material-tailwind/react";
import Image from "next/image";
import { BookService } from "@/services/book.service";
import { BookInterface } from "@/interfaces/book/book.interface";
import { Comments } from "@/components";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
});

const BookDetailPage: NextPage<BookDetailPageProps> = ({ data }) => {
  const handleDownloadClick = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = data.book_file;
    link.target = "_blank";
    link.download = `${data.slug}.pdf`; // Set the desired file name

    // Append the link to the document
    document.body.appendChild(link);

    // Simulate a click on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className={`w-10/12 mx-auto`}>
        <div className="flex items-center justify-between py-2 px-1">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link className="underline-offset-4" href="/">
                  Bosh sahifa
                </Link>
              </li>
              <li className="underline underline-offset-4">Kutubxona</li>
            </ul>
          </div>
          <div className="w-7/12">
            <Input
              type="search"
              label="Izlang toping ..."
              className=""
              crossOrigin={undefined}
            />
          </div>
        </div>
        <div className={`flex items-start gap-x-6 mt-3 justify-between`}>
          <div className={`w-[25%] sticky top-24`}>
            <div className={`overflow-hidden`}>
              <Image
                src={data.cover_image}
                alt={data.slug}
                width={999}
                height={999}
                className={`w-full object-cover group-hover:scale-110 duration-300 bg-gray-500`}
              />
            </div>
            <hr className={`my-4`} />
            <ul className={`flex items-center gap-x-2 text-gray-800`}>
              <li>{`Bo'limlar: `}</li>
              <li>
                <Link
                  className={`underline-offset-4 underline hover:text-black`}
                  href={`/library/category/${data.category_slug}`}
                >
                  {data.category_name}
                </Link>
              </li>
            </ul>
          </div>
          <div className={`min-h-screen w-[75%]`}>
            <div>
              <h1
                className={`text-center font-semibold text-4xl ${merriweather.className}`}
              >
                {data.name}
              </h1>
              <hr className={`my-2`} />
              <div className={`flex items-center justify-between`}>
                <p className={`underline-offset-4 underline`}>
                  {data.author} {`(Muallif)`}
                </p>
                <p className={`underline-offset-4 underline`}>
                  {`ISBN: `}
                  {data.isbn}
                </p>
              </div>
              <div className={`mt-5`}>
                <button
                  onClick={handleDownloadClick}
                  className={`border px-4 py-1 rounded bg-orange-600 text-white font-semibold text-lg`}
                >
                  Yuklab olish
                </button>
                <hr className={`my-2`} />
                <p>{data.description}</p>
              </div>
            </div>
            <hr className={`my-5`} />
            <div>
              <Comments data={data.comments} book_id={data.id} blog_id={null} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetailPage;

export const getServerSideProps: GetServerSideProps<
  BookDetailPageProps
> = async ({ query }) => {
  const slug = query.slug as string;
  const data = await BookService.getBookBySlug(slug);
  return {
    props: {
      data,
    },
  };
};

interface BookDetailPageProps {
  data: BookInterface;
}
