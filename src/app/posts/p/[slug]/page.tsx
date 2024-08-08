import React from "react";

import AllPosts from "@/components/posts/all-posts";
import { getPaginatedPosts, getPostPaths } from "@/lib/posts-util";

interface PaginatedPostsPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PaginatedPostsPageProps) {
  const { slug } = params;
  const { currentPage } = getPaginatedPosts(slug);

  return {
    alternates: {
      canonical: `https://www.seanhuang.dev/posts/p/${currentPage}`,
    },
    openGraph: {
      url: `https://www.seanhuang.dev/posts/p/${currentPage}`,
    },
  };
}

const PaginatedPostsPage = ({ params }: PaginatedPostsPageProps) => {
  const { slug } = params;
  const { posts, currentPage, numPages } = getPaginatedPosts(slug);

  return (
    <AllPosts posts={posts} currentPage={currentPage} numPages={numPages} />
  );
};

export default PaginatedPostsPage;

export async function generateStaticParams() {
  const postPaths = getPostPaths();

  return postPaths;
}
