import Link from "next/link";
import React from "react";

import classes from "./archives-list.module.scss";
import { PostData } from "@/lib/posts-util";

interface ArchivesListProps {
  posts: {
    year: number;
    posts: PostData[];
  }[];
  count: number;
}

const ArchivesList = (props: ArchivesListProps) => {
  const { posts, count } = props;

  return (
    <section className={classes.archives}>
      <h2>Archives</h2>
      <p>
        目前總共有 {count} 篇文章 {`ʕ•̀ω•́ʔ✧`}
      </p>
      {posts.map((item) => (
        <div key={item.year}>
          <h3>{item.year}</h3>
          <ul>
            {item.posts.map((post) => (
              <li key={post.slug}>
                <span>{post.month}</span>{" "}
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ArchivesList;
