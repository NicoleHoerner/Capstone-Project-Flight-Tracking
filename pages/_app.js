import GlobalStyle from "@/styles";
import Head from "next/head";
import Header from "../components/Header/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
