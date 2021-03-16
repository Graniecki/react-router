import  React, { useState } from 'react';

import { Counter } from './Counter';
import { RandomButton } from './RandomButton';

export const titleContext = React.createContext({
  title: 'Default title',
  chngTitle: () => {}
});

function App() {
  const [title, setTitle] = useState('I am a title!!!');

  return (
    <titleContext.Provider value={{
      title,
      changeTitle: () => setTitle('new title')
    }}>
      <div className="App">
        <Counter />
        <RandomButton />
      </div>
    </titleContext.Provider>
  );
}

export default App;
