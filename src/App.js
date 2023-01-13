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
import MovieSearch from './components/search/MovieSearch';
import SignUpForm from './components/form/SignUpForm';
import SignUpFormHook from './components/form/SignUpFormHook';
import RegisterRHF from './components/form/RegisterRHF';
import { Fragment } from 'react';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import DropdownPortal from './components/control/DropdownPortal';
import Tooltip from './components/tooltip/Tooltip';
import Portal from './components/portal/Portal';
const theme = {};

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
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
      {/* <HackerNews /> */}
      {/* <MovieSearch/> */}
      {/* <SignUpForm /> */}
      {/* <SignUpFormHook /> */}
      {/* <RegisterRHF /> */}

      {/* Start MODAL */}
      {/* <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)} />
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-lg"
        onClick={() => setShowModal(true)}>
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        adipisci!
      </div> */}
      {/* END MODAL */}

      {/* <div className="p-5 overflow-hidden">
        <DropdownPortal />
      </div> */}

      {/* <Tooltip text={'Hover'}>
        Đây là nộiádaaaaa Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Sapiente fugiat odit earum repellendus sunt deleniti laudantium
        facilis voluptates sint expedita. dung
      </Tooltip> */}

      {/* PropTypes */}
      {/* <Modal open={true} /> */}

      {/* Portal Advance */}
      <Portal />
    </Fragment>
  );
}

export default App;
