import React, { useState } from "react";

// Layout components
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "gatsby-theme-mate/src/components/Footer";

// Sections that will fetch data for you
import Landing from "../sections/Landing";
import Contents from "../components/Contents";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Landing />
      <Contents />
      <Footer />
    </Layout>
  );
};

export default Home;
