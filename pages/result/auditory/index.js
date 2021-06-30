import Head from "next/head";
import { withRouter } from "next/router";
import Header from "../../../components/Header/Header";
import ResultContentAuditory from "../../../components/ResultContentAuditory/ResultContentAuditory";

function ResultAuditory() {
  return (
    <>
      <Head>
        <title>Keelearn - Result</title>
        <meta name="description" content="Keelearn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResultContentAuditory />
    </>
  );
}

export default withRouter(ResultAuditory);
