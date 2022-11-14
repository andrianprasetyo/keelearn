import Head from "next/head";
import { withRouter } from "next/router";
import Header from "../../components/Header/Header";
import TreeGraph from "../../components/TreeGraph/TreeGraph";

function TreePage() {
  return (
    <>
      <Head>
        <title>Keelearn - Tree page</title>
        <meta name="description" content="Keelearn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TreeGraph />
    </>
  );
}

export default withRouter(TreePage);
