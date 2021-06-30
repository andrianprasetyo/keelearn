import Head from "next/head";
import { withRouter } from "next/router";
import Header from "../../../components/Header/Header";
import ResultContentVisual from "../../../components/ResultContentVisual/ResultContentVisual";

function ResultVisual() {
  return (
    <>
      <Head>
        <title>Keelearn - Result</title>
        <meta name="description" content="Keelearn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResultContentVisual />
    </>
  );
}

export default withRouter(ResultVisual);
