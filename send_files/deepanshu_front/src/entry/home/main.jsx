import React from 'react'
import ReactDOM from 'react-dom/client'
import TopLabel from './TopLabel.jsx'
import Insight from './insights.jsx';
import Card from './featureCard.jsx';
import Footer from './footer.jsx';
import BottomLabel from './bottomlabel.jsx';

function Home(){
  return(
    <>
    <TopLabel />
    <Card />
    <Insight />
    <BottomLabel/>
    <Footer />
    </>
  )
}

export default Home;