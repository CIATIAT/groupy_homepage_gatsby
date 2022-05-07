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
import Triangle from '../components/Triangle';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
      <div style={{
            position: '-webkit-sticky', /* Safari */
            position: 'sticky',
            top: 0,}}>
            <Triangle
              color="color3"
              height={['50vh', '20vh']}
              width={['100vw', '100vw']}
              position="top-left"
            />
      </div>
      <div>
        <About />
        <Member/>
        <News/>
        <Footer/>
      </div>
  </Layout>
);

export default Home;
