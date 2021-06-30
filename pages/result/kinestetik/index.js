import Head from "next/head";
import { withRouter } from "next/router";
import Header from "../../../components/Header/Header";
import ResultContentKinestetik from "../../../components/ResultContentKinestetik/ResultContentKinestetik";

function ResultKinestetik() {
  return (
    <>
      <Head>
        <title>Keelearn - Result</title>
        <meta name="description" content="Keelearn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResultContentKinestetik />
    </>
  );
}

export default withRouter(ResultKinestetik);
