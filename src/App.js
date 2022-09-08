import './App.css';
import Card from './components/card/Card';
import CardList from './components/card/CardList';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Card2 from './components/card/Card2';
import Photo from './components/photo/Photo';
import '../src/index.css';
import Couter from './components/counter/Couter';
import Timer from './components/timer/Timer';
import Header from './components/header/Header';
import HackerNews from './components/news/HackerNews';

const theme = {};

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList> */}
      {/* <CardList>
        <Card2 secondary={true} />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </CardList> */}

      {/* Load PHOTO image from API */}
      {/* <Photo /> */}

      {/* Counter */}
      {/* <Couter /> */}

      {/* Clean up để lấy mess cuối */}
      {/* <Timer /> */}

      {/* <Header /> */}

      {/* news */}
      <HackerNews />
    </div>
  );
}

export default App;
