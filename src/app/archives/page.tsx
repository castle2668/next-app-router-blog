import { Metadata } from "next";
import React from "react";

import ArchivesList from "@/components/archives-page/archives-list";
import { getArchives, getPostsCount } from "@/lib/archives-util";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seanhuang.dev"),
  title: "Archives",
  alternates: {
    canonical: "/archives",
  },
  openGraph: {
    title: "Archives",
    url: "/archives",
  },
};

const ArchivesPage = () => {
  const archives = getArchives();
  const count = getPostsCount();

  return <ArchivesList posts={archives} count={count} />;
};

export default ArchivesPage;
