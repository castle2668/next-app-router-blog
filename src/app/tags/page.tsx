import { Metadata } from "next";
import React from "react";

import AllTags from "@/components/tags/all-tags";
import { getAllPosts } from "@/lib/posts-util";
import { getAllTags } from "@/lib/tags-util";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seanhuang.dev"),
  title: "Tags",
  alternates: {
    canonical: "/tags",
  },
  openGraph: {
    title: "Tags",
    url: "/tags",
  },
};

const AllTagsPage = () => {
  const allPosts = getAllPosts();
  const allTags = getAllTags(allPosts);

  return <AllTags tags={allTags} />;
};

export default AllTagsPage;
