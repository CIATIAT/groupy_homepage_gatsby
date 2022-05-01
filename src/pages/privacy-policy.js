import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import PrivacyPolicy from '../gatsby-theme-mate/sections/PrivacyPolicy';
import Header from 'gatsby-theme-mate/src/components/Header';
import Footer from 'gatsby-theme-mate/src/components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <PrivacyPolicy />
    <Footer />
  </Layout>
);
export default Home;
