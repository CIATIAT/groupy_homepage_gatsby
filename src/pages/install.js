import React from "react";

// Layout components
import Layout from "gatsby-theme-mate/src/components/Layout";
import Header from "gatsby-theme-mate/src/components/Header";
import Footer from "gatsby-theme-mate/src/components/Footer";
import Install from "../gatsby-theme-mate/sections/Install";
import Helmet from "../gatsby-theme-mate/components/Helmet";

const Home = () => (
  <Layout>
    <Helmet description="groupyはPCではご利用いただけません。iPhone, Android端末でご利用ください。" />
    <Header />
    <Install />
    <Footer />
  </Layout>
);
export default Home;
