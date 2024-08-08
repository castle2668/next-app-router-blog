"use client";

import React, { useEffect, useState } from "react";

import Pagination from "../pagination";
import classes from "./all-posts.module.css";
import PostsItem from "./posts-item";
import { PostData } from "@/lib/posts-util";

interface AllPostsProps {
  posts: PostData[];
  currentPage?: number;
  numPages?: number;
}

const AllPosts = (props: AllPostsProps) => {
  const { posts, currentPage, numPages } = props;

  // 當有 currentPage 和 numPages 時，才顯示 Pagination
  const [showPagination, setShowPagination] = useState<boolean>(false);

  useEffect(() => {
    setShowPagination(currentPage && numPages ? true : false);
  }, [currentPage, numPages]);

  return (
    <section className={classes.posts}>
      <ul className={classes.list}>
        {posts.map((post) => (
          <PostsItem key={post.slug} post={post} />
        ))}
      </ul>
      {showPagination ? (
        <Pagination currentPage={currentPage} numPages={numPages} />
      ) : null}
    </section>
  );
};

export default AllPosts;
