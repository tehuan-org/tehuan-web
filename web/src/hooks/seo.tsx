import { atom, useAtomValue } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";

type SeoAtom = {} & NextSeoProps;

export const seoAtom = atom<SeoAtom>({
  title: "Holas",
  description: "Description",
});

export const useSeo = (props: SeoAtom) => {
  useHydrateAtoms([[seoAtom, props]]);
};

const Seo: React.FC<{}> = ({}) => {
  const seo = useAtomValue(seoAtom);

  return <NextSeo {...seo} />;
};

export default Seo;
