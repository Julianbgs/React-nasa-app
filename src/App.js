import React from 'react';
import { Header } from './components/Header'
import { Main } from "./components/Main";
import { SliderRover } from './components/Slider'
import { Search } from './components/Search';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <SliderRover></SliderRover>
      <Search></Search>
    </>

  );
}

export default App;
