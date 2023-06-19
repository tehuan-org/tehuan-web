import { Global } from "@emotion/react";
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased h-full`,
    ...css`
      &::-webkit-scrollbar {
        width: 0px;
        
      }
    `,
  },
  html: tw`h-full bg-slate-900 text-white`,
  "#__next": tw`h-full`,
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
