import React from 'react';
import './App.css';
import FormLogin from './components/FormLogin';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
function App() {
  const items = [
    {
      src: "https://image.flaticon.com/icons/png/512/1297/1297859.png",
      label: "HOME"
    },
    {
      src: "https://image.flaticon.com/icons/svg/548/548427.svg",
      label: "DEALS"
    },
    {
      src: "https://image.flaticon.com/icons/svg/1103/1103496.svg",
      label: "UPLOAD"
    },
    {
      src: "https://image.flaticon.com/icons/svg/633/633652.svg",
      label: "WORK"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2099/2099058.svg",
      label: "SETTINGS"
    }
  ]
  return (
    <div className="App">
      <Header/>
      <FormLogin/>
      <TabMenu items = {items}/>
    </div>
  );
}

export default App;
