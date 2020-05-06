import React from 'react';
import './App.css';
import FormLogin from './components/FormLogin';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
function App() {
  return (
    <div className="App">
      <Header/>
      <FormLogin/>
      <TabMenu/>
    </div>
  );
}

export default App;
