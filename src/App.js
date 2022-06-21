import React from 'react'
import './App.css';
import TopHeader from './components/header/top_header/top_header';
import MainHeader from './components/header/main_header/main_header';
import Footer from './components/footer/footer';
import { ContentSideContainer } from './components/content/content_side_container';

const App = (props) => {
  return (
    <div className="App">
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <ContentSideContainer/>
      <Footer/>
    </div>
  )
}

export default App;
