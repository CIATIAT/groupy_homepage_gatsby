import React from "react";

// Layout components
import Layout from "gatsby-theme-mate/src/components/Layout";
import Header from "gatsby-theme-mate/src/components/Header";
import Company from "../gatsby-theme-mate/sections/Company";
import Footer from "gatsby-theme-mate/src/components/Footer";
import Helmet from "../gatsby-theme-mate/components/Helmet";

const Home = () => (
  <Layout>
    <Helmet title="Groupy Inc. 会社概要" description="Groupy株式会社の会社情報を紹介します。" />
    <Header />
    <Company />
    <Footer />
  </Layout>
);
export default Home;
