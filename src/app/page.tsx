import React from "react";

import AllPosts from "@/components/posts/all-posts";
import { getPaginatedPosts } from "@/lib/posts-util";

function HomePage() {
  const { posts, currentPage, numPages } = getPaginatedPosts("1");

  return (
    <AllPosts posts={posts} currentPage={currentPage} numPages={numPages} />
  );
}

export default HomePage;
