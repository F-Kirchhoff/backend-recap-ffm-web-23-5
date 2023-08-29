import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import { jokes as initialJokes } from "@/lib/data";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [jokes, setJokes] = useState(initialJokes);

  function handleAddJoke(newJoke) {
    setJokes([newJoke, ...jokes]);
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} jokes={jokes} handleAddJoke={handleAddJoke} />
      </SWRConfig>
    </>
  );
}
