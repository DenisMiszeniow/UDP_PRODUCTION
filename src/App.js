import './App.css';
import TopHeader from './components/header/top_header/top_header';
import MainHeader from './components/header/main_header/main_header';
import ContentSide from './components/content/content_side';
import Footer from './components/footer/footer';

const App = (props) => {
  return (
    <div className="App">
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <ContentSide/>
      <Footer/>
    </div>
  )
}

export default App;
