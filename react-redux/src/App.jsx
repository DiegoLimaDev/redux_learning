import React from 'react';
import { CakeView } from './features/cakes/CakeView';
import { IcecreamView } from './features/icecreams/IcecreamView';
import { UserView } from './features/users/UserView';
import './App.css';

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
