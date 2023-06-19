import { useHydrateAtoms } from "jotai/utils";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { seoAtom, useSeo } from "~/hooks/seo";

interface Props {
  slug: string | null;
}

const SlugPage: NextPage<Props> = ({ slug }) => {
  useSeo({
    title: "This is: " + slug,
  });

  return <div>{slug}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  query,
}) => {
  const slug = String(params?.slug) ?? null;
  return {
    props: {
      slug,
    },
  };
};

export default SlugPage;
