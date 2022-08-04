import React from "react";

// Layout components
import Layout from "gatsby-theme-mate/src/components/Layout";
import Header from "gatsby-theme-mate/src/components/Header";
import Footer from "gatsby-theme-mate/src/components/Footer";
import Install from "../gatsby-theme-mate/sections/Install";
import Helmet from "../gatsby-theme-mate/components/Helmet";

const Home = () => (
  <Layout>
    <Helmet description="グループとグループを繋げるモバイルアプリgroupyはこちら。iPhone,androidで絶賛配信中！" />
    <Header />
    <Install />
    <Footer />
  </Layout>
);
export default Home;
