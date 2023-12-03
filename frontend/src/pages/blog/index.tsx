import React from "react";
import { NextPage } from "next";
import Layout from "@/layout/layout";
import Link from "next/link";
import { Input, List, ListItem } from "@material-tailwind/react";
import { BlogCard } from "@/components";

const BlogPage: NextPage<BlogPageProps> = () => {
  return (
    <Layout>
      <div className={`flex items-center justify-between my-2`}>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link className={`underline-offset-4`} href={`/`}>
                Bosh sahifa
              </Link>
            </li>
            <li className={`underline underline-offset-4`}>Maqola</li>
          </ul>
        </div>
        <div>
          {/*@ts-ignore*/}
          <Input type={"search"} label="Izlang toping ..." className={`w-96`} />
        </div>
      </div>
      <div className={`flex mt-6 gap-x-6 items-start justify-between`}>
        <div
          className={`w-3/12 bg-gray-50 border rounded-lg shadow-sm p-2 sticky top-24`}
        >
          <List>
            <ListItem>{`Barcha bo'limlar`}</ListItem>
            <ListItem>Tadbirlar</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
          </List>
        </div>
        <div className={`w-9/12 overflow-hidden grid grid-cols-2 gap-6 p-4`}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

interface BlogPageProps {}
