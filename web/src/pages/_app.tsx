import { type AppType } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";

import { api } from "~/utils/api";
import Seo from "~/hooks/seo";
import { Provider } from "jotai";
import { GoogleAnalytics } from "nextjs-google-analytics";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <GlobalStyles />
      <Provider>
        <Component {...pageProps} />
        <Seo />
      </Provider>
    </>
  );
};

export default api.withTRPC(MyApp);
