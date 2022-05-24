import Head from "next/head";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Dashboard"
      description="Admin console for kinghoddy"
      route="dashboard"
    >
      Hello world
    </Layout>
  );
}
