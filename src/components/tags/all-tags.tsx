import Link from "next/link";
import React from "react";

import classes from "./all-tags.module.scss";

interface AllTagsProps {
  tags: { slug: string; name: string; count: number }[];
}

const AllTags = (props: AllTagsProps) => {
  const { tags } = props;

  return (
    <section className={classes.tags}>
      <h2>Tags</h2>
      <p>
        目前總共有 {tags.length} 個標籤 {`(๑•̀ω•́)ノ`}
      </p>
      <ul>
        {tags.map((tag) => (
          <li key={tag.slug}>
            <Link href={`/tags/${tag.slug}`}>
              {tag.name} ({tag.count})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllTags;
