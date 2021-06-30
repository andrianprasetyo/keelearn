import Head from "next/head";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Keelearn</title>
        <meta name="description" content="Keelearn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header homepage={true} />
      <Hero />
      <Content />
    </>
  );
}
