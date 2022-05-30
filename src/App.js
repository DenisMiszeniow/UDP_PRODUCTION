import './App.css';
import TopHeader from './components/header/top_header/top_header';
import MainHeader from './components/header/main_header/main_header';
import { BrowserRouter } from 'react-router-dom';
import ContentSide from './components/content/content_side';

const App = () => {
  return (
    <div className="App">
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <ContentSide/>
    </div>
  )
}

export default App;
