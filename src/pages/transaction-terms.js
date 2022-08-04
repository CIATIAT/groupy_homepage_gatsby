import React from "react";

// Layout components
import Layout from "gatsby-theme-mate/src/components/Layout";
import Header from "gatsby-theme-mate/src/components/Header";
import TransactionTerms from "../gatsby-theme-mate/sections/TransactionTerms";
import Footer from "gatsby-theme-mate/src/components/Footer";
import Helmet from "../gatsby-theme-mate/components/Helmet";

const Home = () => (
  <Layout>
    <Helmet
      title="特定商取引法に基づく表示"
      description="groupyの特定商取引法に基づく表示です。groupyはグループとグループを繋げる大学生限定のアプリです。"
    />
    <Header />
    <TransactionTerms />
    <Footer />
  </Layout>
);
export default Home;
