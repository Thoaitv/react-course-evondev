import './App.css';
import Card from './components/card/Card';
import CardList from './components/card/CardList';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Card2 from './components/card/Card2';

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

      <CardList>
        <Card2 secondary={true} />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </CardList>
    </div>
  );
}

export default App;
