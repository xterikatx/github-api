import React from 'react';
import StyleGlobal from './styles/globalStyle';
import Routes from './routes';
import Navbar from './components/Menu';


function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <StyleGlobal />
    </>
  );
}

export default App;
