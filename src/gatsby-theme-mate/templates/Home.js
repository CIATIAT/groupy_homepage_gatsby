import React from 'react';

// Layout components
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from 'gatsby-theme-mate/src/components/Footer';

// Sections that will fetch data for you
import About from '../sections/About';
import Member from '../sections/Member';
import News from '../sections/News';
import Landing from '../sections/Landing';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Member />
    <News />
    <Footer />
  </Layout>
);

export default Home;
