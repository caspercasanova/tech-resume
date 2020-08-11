import React from 'react';
import './App.scss';

import DriversLiscence from './components/DriversLiscence';

function App() {
  // const [ui, setUI] = useState('home') 
  return (
    <div className="App">
        <DriversLiscence />
        {console.log(`%c${secretMessage}`, 'color: cyan; font-weight: bold;')}
    </div>
  );
}

export default App;


const secretMessage = 'Please Hire Me! 1-310-977-3170 :))\nAlso I Have A Little Secret Hidden On The Site; Do You Think You Can Find It? \n\nHere Is A Hint:\n\nBefore The first\nAfter The Last\nNothing Between\nNo Shadows Cast\n\nWhat Am I ??'