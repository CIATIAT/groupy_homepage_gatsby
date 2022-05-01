import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Terms from '../gatsby-theme-mate/sections/Terms';
import Header from 'gatsby-theme-mate/src/components/Header';
import Footer from 'gatsby-theme-mate/src/components/Footer';

const Home = () => (
  <Layout>
    <Header />
    <Terms />
    <Footer />
  </Layout>
);
export default Home;
