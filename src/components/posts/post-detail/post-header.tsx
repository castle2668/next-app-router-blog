import Image from "next/image";
import React from "react";

import classes from "./post-header.module.scss";

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader = (props: PostHeaderProps) => {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      {image && <Image src={image} alt={title} width={200} height={120} />}
    </header>
  );
};

export default PostHeader;
