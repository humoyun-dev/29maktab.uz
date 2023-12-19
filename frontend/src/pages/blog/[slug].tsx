import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/layout/layout";
import { Comments, Loading, SlugCard } from "@/components";
import { BlogService } from "@/services/blog.service";
import { BlogInterface } from "@/interfaces/blog/blog.interface";
import { BlogListInterface } from "@/interfaces/blog/blog-list.interface";

interface BlogDetailPageProps {
  data: BlogInterface;
  blog: BlogListInterface;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ data, blog }) => {
  const [show, setShow] = useState<boolean>(false);
  if (!data || !blog) {
    return <Loading />;
  }

  return (
    <Layout>
      <div
        className={`flex md:flex-row flex-col items-start justify-between md:gap-x-2 mt-1 gap-y-5`}
      >
        <div className={`md:w-9/12 w-11/12 px-2 mx-auto md:mx-0`}>
          <div className={`aspect-video rounded-xl overflow-hidden`}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${data.video}`}
              title={data.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={`flex my-2 items-start gap-x-4`}>
            <div className={`md:px-16 mt-4`}>
              <h1 className={`text-3xl mb-3 font-semibold`}>{data.title}</h1>
              {show ? (
                <div>
                  <div
                    className={`text-gray-800`}
                    dangerouslySetInnerHTML={{
                      __html: data.content,
                    }}
                  ></div>
                  <p
                    onClick={() => setShow((show) => !show)}
                    className={`underline underline-offset-4 text-orange-600 hover:text-black duration-300 text-lg text-center`}
                  >{`Kamroq`}</p>
                </div>
              ) : (
                <div className={`relative`}>
                  <div
                    className={`text-gray-800`}
                    dangerouslySetInnerHTML={{
                      __html: data.content.slice(0, 300),
                    }}
                  ></div>
                  <p
                    onClick={() => setShow((show) => !show)}
                    className={`underline underline-offset-4 text-orange-600 hover:text-black duration-300 text-lg text-center`}
                  >{`Ko'proq`}</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <hr className={`my-3`} />
            <Comments blog_id={data.id} book_id={null} data={data.comments} />
          </div>
        </div>

        <ul
          className={`md:w-3/12 w-11/12 md:mx-0 mx-auto px-2 md:flex flex-col gap-y-3`}
        >
          {blog.results.map((i) => (
            <li key={i.id}>
              <SlugCard data={i} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<
  BlogDetailPageProps
> = async ({ query }) => {
  try {
    const slug = query.slug as string;
    const data = await BlogService.getBlogsBySlug(slug);
    const blog = await BlogService.getAllBlogs();

    return {
      props: {
        data,
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
export default BlogDetailPage;
