import React from "react";

import AllPosts from "../posts/all-posts";
import classes from "./tag-detail.module.css";
import { PostData } from "@/lib/posts-util";

interface TagDetailProps {
  tag: {
    name: string;
  };
  posts: PostData[];
}

const TagDetail = (props: TagDetailProps) => {
  const { tag, posts } = props;

  return (
    <section className={classes.tag}>
      <h2>#{tag.name}</h2>
      <AllPosts posts={posts} />
    </section>
  );
};

export default TagDetail;
