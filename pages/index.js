import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    async function getFlights() {
      const res = await fetch("/api/hello");
      const data = await res.json();
      console.log(data);
    }
    getFlights();
  }, []);

  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Heading>🐧Penguin Capstone Template🐧</Heading>
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
