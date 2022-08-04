import React from "react";

// Layout components
import Layout from "gatsby-theme-mate/src/components/Layout";
import PrivacyPolicy from "../gatsby-theme-mate/sections/PrivacyPolicy";
import Header from "gatsby-theme-mate/src/components/Header";
import Footer from "gatsby-theme-mate/src/components/Footer";
import Helmet from "../gatsby-theme-mate/components/Helmet";

const Home = () => (
  <Layout>
    <Helmet
      title="プライバシーポリシー"
      description="groupyのプライバシーポリシーです。groupyはグループとグループを繋げる大学生限定のアプリです。"
    />
    <Header />
    <PrivacyPolicy />
    <Footer />
  </Layout>
);
export default Home;
