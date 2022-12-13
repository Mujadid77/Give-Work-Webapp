import Main from './components/Main';
import { GlobalProvider } from './context/GlobalStateContext';
// import { useState } from 'react';

function App() {


  return (
    <GlobalProvider>
      <div className="App">
        <Main />
      </div>
    </GlobalProvider>
  );
}

export default App;
