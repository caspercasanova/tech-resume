import React from 'react';
import './App.scss';

import Resume from './components/Resume.js'

function App() {
  // const [ui, setUI] = useState('home') 
  return (
    <div className="App">


        <Resume />

        {console.log(`%c${secretMessage}`, 'color: cyan; font-weight: bold;')}
    </div>
  );
}

export default App;


const secretMessage = 'Please Hire Me! 1-310-977-3170 :))\nAlso I Have A Little Secret Hidden On The Site; Do You Think You Can Find It? \n\nHere Is A Hint:\n\nBefore The first\nAfter The Last\nNothing Between\nNo Shadows Cast\n\nWhat Am I ??'