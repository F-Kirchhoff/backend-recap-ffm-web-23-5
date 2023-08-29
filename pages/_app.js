import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import { jokes as initialJokes } from "@/lib/data";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR("/api/jokes", fetcher);

  function handleAddJoke(newJoke) {
    setJokes([newJoke, ...jokes]);
  }

  if (isLoading) return;

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} jokes={data} handleAddJoke={handleAddJoke} />
      </SWRConfig>
    </>
  );
}
