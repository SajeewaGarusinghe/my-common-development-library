import React from 'react';
import TopicBox from '../Components/TopicBox';
import Content from '../Components/Content';
import '../Components/Component.css';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Nav/>
      <TopicBox/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Home;
