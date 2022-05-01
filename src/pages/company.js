import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
import Company from '../gatsby-theme-mate/sections/Company';
import Footer from 'gatsby-theme-mate/src/components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <Company />
    <Footer />
  </Layout>
);
export default Home;
