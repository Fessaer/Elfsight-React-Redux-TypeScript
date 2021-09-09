import React from 'react';
import { FilterCharacters } from './components/FilterCharacters';
import { RickRender } from './components/RickRender';



const App: React.FC = () => {
  return (
    <div>
      <FilterCharacters />
      <RickRender />
    </div>
  )
}

export default App;
