import Head from "next/head";

import Layout from "../components/Layout";
import { PersonOutline } from "@mui/icons-material";

export default function Home() {
  return (
    <Layout
      title="Dashboard"
      description="Admin console for kinghoddy"
      route="dashboard"
      button="Log Out"
      icon={<PersonOutline />}
    >
    </Layout>
  );
}
