import React from "react";

// Layout components
import Layout from "gatsby-theme-mate/src/components/Layout";
import Terms from "../gatsby-theme-mate/sections/Terms";
import Header from "gatsby-theme-mate/src/components/Header";
import Footer from "gatsby-theme-mate/src/components/Footer";
import Helmet from "../gatsby-theme-mate/components/Helmet";

const Home = () => (
  <Layout>
    <Helmet
      title="利用規約"
      description="groupyの利用規約です。groupyはグループとグループを繋げるアプリです。"
    />
    <Header />
    <Terms />
    <Footer />
  </Layout>
);
export default Home;
