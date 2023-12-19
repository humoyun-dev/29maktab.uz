import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { SearchServices } from "@/services/search.services";
import { BlogInterface } from "@/interfaces/blog/blog.interface";
import Layout from "@/layout/layout";
import { BlogCard } from "@/components";
import Link from "next/link";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/router";

const SearchPage: NextPage<SearchPageProps> = ({ data, q }) => {
  const [search, setSearch] = useState<string>(q);

  const router = useRouter();

  return (
    <Layout>
      <div className="flex sticky items-start justify-between gap-x-4">
        <div className="md:w-10/12 w-11/12 min-h-screen mx-auto">
          <div className="flex md:flex-row flex-col-reverse items-center justify-between py-2 px-1">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link className={`underline-offset-4`} href={`/`}>
                    Bosh sahifa
                  </Link>
                </li>
                <li className="underline-offset-4">
                  <Link className={`underline-offset-4`} href={`/`}>
                    Maqola
                  </Link>
                </li>
                <li className="underline-offset-4 underline">Search: {q}</li>
              </ul>
            </div>
            <div className="md:w-7/12 w-full flex relative">
              <Input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                label="Izlang toping ..."
                className="rounded-l-lg rounded-r-none"
                crossOrigin={undefined}
              />
              <button
                onClick={() => router.push(`/search/${search}`)}
                className={`bg-orange-600 px-3 rounded-r-lg`}
              >
                Search
              </button>
            </div>
          </div>
          <hr />
          <div className="grid md:grid-cols-4 md:gap-6 gap-3 grid-cols-2 my-4 pr-3">
            {data.map((blog) => (
              <BlogCard data={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({
  query,
}) => {
  try {
    const q = query.search as string;
    const data = await SearchServices.getBlog(q);

    return {
      props: {
        data,
        q,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

interface SearchPageProps {
  data: BlogInterface[];
  q: string;
}
