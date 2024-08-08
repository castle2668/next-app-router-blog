import React from "react";

import AllPosts from "@/components/posts/all-posts";
import { getPaginatedPosts } from "@/lib/posts-util";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seanhuang.dev"),
  title: "Posts",
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    title: "Posts",
    url: "/posts",
  },
};

const AllPostsPage = () => {
  const { posts, currentPage, numPages } = getPaginatedPosts("1");

  return (
    <AllPosts posts={posts} currentPage={currentPage} numPages={numPages} />
  );
};

export default AllPostsPage;
