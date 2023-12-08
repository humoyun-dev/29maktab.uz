import React from "react";
import { NextPage } from "next";
import Layout from "@/layout/layout";
import Link from "next/link";
import { Input, List, ListItem } from "@material-tailwind/react";
import { BlogCard } from "@/components";

const BlogPage: NextPage<BlogPageProps> = () => {
  return (
    <Layout>
      <div className={`flex sticky items-start justify-between gap-x-4`}>
        <div
          className={`sticky w-3/12 z-50 h-full border-r border-b rounded-lg top-[73px]`}
        >
          <h1 className={`text-xl my-2 text-center`}>{`Bo'limlar`}</h1>
          <hr />
          <div className={`w-10/12 py-2 mx-auto`}>
            {/*@ts-ignore*!/*/}
            <Input type={"search"} label="Bo'limlarni izlang ..." />
          </div>
          <hr />
          <List>
            <ListItem>{`Barcha bo'limlar`}</ListItem>
            <ListItem>Tadbirlar</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
            <ListItem>{`To'garaklar`}</ListItem>
          </List>
        </div>
        <div className={`w-9/12 min-h-screen`}>
          <div className={`flex items-center justify-between py-2 px-1`}>
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
            <div className={`w-7/12`}>
              {/*@ts-ignore*/}
              <Input type={"search"} label="Izlang toping ..." className={``} />
            </div>
          </div>
          <hr />
          <div className={`grid grid-cols-4 gap-6 my-4 pr-3`}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

interface BlogPageProps {}
