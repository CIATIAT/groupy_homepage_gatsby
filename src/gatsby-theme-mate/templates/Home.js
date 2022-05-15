import React, { useState } from "react";

// Layout components
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "gatsby-theme-mate/src/components/Footer";

// Sections that will fetch data for you
import Landing from "../sections/Landing";
import Contents from "../components/Contents";
import Helmet from "../components/Helmet";

const Home = () => {
  return (
    <Layout>
      <Helmet
        title="groupy -恋愛グループマッチングアプリ【公式】"
        description="恋愛グループマッチングアプリ「groupy」の公式ページはこちら！近くの男性グループと女性グループをつなげる業界新登場新マッチングサービスです！"
      />
      <Header />
      <Landing />
      <Contents />
      <Footer />
    </Layout>
  );
};

export default Home;
