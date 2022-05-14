import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
import Footer from 'gatsby-theme-mate/src/components/Footer';
import Install from '../gatsby-theme-mate/sections/Install';

const Home = () => (
  <Layout>
    <Header />
       <Install />
    <Footer />
  </Layout>
);
export default Home;
