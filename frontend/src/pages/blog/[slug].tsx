import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/layout/layout";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import { Comment } from "@/components";

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ slug }) => {
  return (
    <Layout>
      <div className={`w-8/12 px-2`}>
        <div className={`w-full rounded-xl overflow-hidden h-[600px]`}>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={`https://youtu.be/l-qZpmJgXZY?si=R9h7yCAOzikJzH9L`}
          />
        </div>
        <div className={`flex my-2 items-start gap-x-4`}>
          <div className={`w-1/12`}>
            <Image
              src={`/logo.png`}
              alt={"logo"}
              height={999}
              width={999}
              className={`w-16 h-16`}
            />
          </div>
          <div className={`w-11/12`}>
            <h1 className={`text-3xl font-semibold`}>{slug}</h1>
            <p className={``}>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nisi nulla, faucibus posuere dui sed, aliquam egestas dui. Vivamus
                ut venenatis ante, sed dignissim ex. Phasellus rutrum gravida
                nulla vitae efficitur. Aliquam tempus, risus laoreet rutrum
                sollicitudin, diam ligula gravida metus, at pulvinar ex arcu sit
                amet orci. Duis tincidunt lectus ac auctor faucibus. Cras at
                mauris nec leo tempor volutpat. Fusce porta non sem ac lacinia.
                Cras ullamcorper tellus ut blandit placerat. Phasellus maximus
                viverra libero, non volutpat massa malesuada et. Aenean commodo
                libero varius volutpat varius. Aliquam pretium, dolor eget porta
                `}
            </p>
          </div>
        </div>
        <div>
          <hr className={`my-3`} />
          <Comment />
        </div>
      </div>
      <div></div>
    </Layout>
  );
};

export default BlogDetailPage;

// @ts-ignore
export const getServerSideProps: GetServerSideProps<
  BlogDetailPageProps
> = async ({ query }) => {
  const slug = query.slug;
  return {
    props: { slug },
  };
};

export interface BlogDetailPageProps {
  slug: string;
  query: string;
}
