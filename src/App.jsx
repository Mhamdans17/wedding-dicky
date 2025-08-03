import React, { useEffect, useRef } from 'react';
import Greeting from './components/Greeting';
import bgMusic from './assets/music.mp3';

function App() {
  const audioRef = useRef();

  useEffect(() => {
    const play = () => {
      audioRef.current?.play();
      window.removeEventListener("click", play);
    };
    window.addEventListener("click", play);
  }, []);

  return (
    <>
      <Greeting />
      <audio ref={audioRef} src={bgMusic} loop />
    </>
  );
}

export default App;
