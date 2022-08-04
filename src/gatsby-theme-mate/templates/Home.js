import React from "react";

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
        title="groupy -大学生限定グループアプリ【公式】"
        description="大学生限定グループアプリ「groupy」の公式ページはこちら！グループとグループを繋げる業界新登場のサービスです！"
      />
      <Header />
      <Landing />
      <Contents />
      <Footer />
    </Layout>
  );
};

export default Home;
