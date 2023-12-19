import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/layout/layout";
import Link from "next/link";
import { Input } from "@material-tailwind/react";
import { BlogCard } from "@/components";
import { BlogService } from "@/services/blog.service";
import { BlogListInterface } from "@/interfaces/blog/blog-list.interface";
import { useRouter } from "next/router";

interface BlogPageProps {
  blogs: BlogListInterface;
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }) => {
  const [search, setSearch] = useState<string>("");

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
                <li className="underline underline-offset-4">Maqola</li>
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
              {search ? (
                <button
                  onClick={() => router.push(`/search/${search}`)}
                  className={`bg-orange-600 px-3 rounded-r-lg`}
                >
                  Search
                </button>
              ) : (
                <button className={`bg-orange-600 px-3 rounded-r-lg`}>
                  Search
                </button>
              )}
            </div>
          </div>
          <hr />
          <div className="grid md:grid-cols-4 md:gap-6 gap-3 grid-cols-2 my-4 pr-3">
            {blogs.results.map((blog) => (
              <BlogCard data={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const blogs = await BlogService.getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};
