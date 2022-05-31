import React from 'react';
import TopicBox from '../Components/TopicBox';
import Content from '../Components/Content';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
const About = () => {
  return (
    <div>
    
      <Nav />
      <h1>This is About Page</h1>
      <TopicBox/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default About;