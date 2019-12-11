import React from 'react';
import { Main } from "./components/Main";
import { SliderRover } from './components/Slider'
import { Search } from './components/Search';
import './App.css';

function App() {
  return (
    <div className="Wrapper">
      <Main></Main>
      <SliderRover></SliderRover>
      <Search></Search>
    </div>

  );
}

export default App;
