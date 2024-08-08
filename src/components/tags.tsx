import Link from "next/link";
import React from "react";

import { slugify } from "@/lib/helper";

import classes from "./tags.module.scss";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={classes.tags}>
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${slugify(tag)}`} className={classes.tag}>
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
