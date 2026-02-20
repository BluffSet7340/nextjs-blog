import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Script from "next/script";

const FirstPost = () => {
  return (
      <Layout>
        <Head>
            <title>First Post</title>
        </Head>

        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home!</Link>
        </h2>
      </Layout>
  );
};

export default FirstPost;
// realized I tried to add this export via the arrow function wrongly and the AI corrected me. I did not follow the appropriate ES-arrow function but now I have!!
