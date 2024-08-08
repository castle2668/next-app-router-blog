import React from "react";

import TagDetail from "@/components/tags/tag-detail";
import { getAllPosts } from "@/lib/posts-util";
import { getAllTags, getTagData } from "@/lib/tags-util";

interface TagDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: TagDetailPageProps) {
  const { slug } = params;
  const { tag } = getTagData(slug);

  return {
    title: tag.name,
    alternates: {
      canonical: `https://www.seanhuang.dev/tags/${tag.slug}`,
    },
    openGraph: {
      url: `https://www.seanhuang.dev/tags/${tag.slug}`,
      title: `${tag.name} | Sean's Blog`,
    },
  };
}

const TagDetailPage = ({ params }: TagDetailPageProps) => {
  const { slug } = params;
  const { tag, posts } = getTagData(slug);

  return <TagDetail tag={tag} posts={posts} />;
};

export default TagDetailPage;

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const allTags = getAllTags(allPosts);
  const tagPaths = allTags.map((tag) => ({
    slug: tag.slug,
  }));

  return tagPaths;
}
