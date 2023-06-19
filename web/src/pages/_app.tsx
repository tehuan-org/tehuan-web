import { type AppType } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";

import { api } from "~/utils/api";
import Seo from "~/hooks/seo";
import { Provider } from "jotai";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Provider>
        <Component {...pageProps} />
        <Seo />
      </Provider>
    </>
  );
};

export default api.withTRPC(MyApp);
