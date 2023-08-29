import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Header from "@/components/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

const swrOptions = {
  fetcher,
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={swrOptions}>
        <Header />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
