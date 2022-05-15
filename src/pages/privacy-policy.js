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
      description="groupyのプライバシーポリシーです。groupyは複数人対複数人でマッチングするグループマッチングアプリです。"
    />
    <Header />
    <PrivacyPolicy />
    <Footer />
  </Layout>
);
export default Home;
