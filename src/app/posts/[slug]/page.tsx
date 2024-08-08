import React from "react";

import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

interface PostDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PostDetailPageProps) {
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    title: postData.title,
    description: postData.excerpt,
    alternates: {
      canonical: `https://www.seanhuang.dev/posts/${postData.slug}`,
    },
    openGraph: {
      url: `https://www.seanhuang.dev/posts/${postData.slug}`,
      title: postData.title,
      description: postData.excerpt,
    },
  };
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  const { slug } = params;

  const postData = getPostData(slug);

  return <PostContent post={postData} />;
};

export async function generateStaticParams() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
  const postPaths = slugs.map((slug) => ({
    slug: slug,
  }));

  return postPaths;
}

export default PostDetailPage;
