import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
import TransactionTerms from '../gatsby-theme-mate/sections/TransactionTerms';
import Footer from 'gatsby-theme-mate/src/components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <TransactionTerms />
    <Footer />
  </Layout>
);
export default Home;