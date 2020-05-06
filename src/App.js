import React, { Component } from 'react';
import './App.css';
import FormLogin from './components/FormLogin';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
import RecommendedFriends from './components/RecommendedFriends';
class App extends Component {
  constructor() {
    super();
    this.items = [
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
    this.friends = [
      {name: "Thủy", urlAvatar: "https://www.gocbao.com/wp-content/uploads/2019/09/stt-hay-khi-dang-anh-con-gai1.jpg6_.jpg"},
      {name: "Thủy", urlAvatar: "https://www.gocbao.com/wp-content/uploads/2019/09/stt-hay-khi-dang-anh-con-gai1.jpg6_.jpg"},
      {name: "Thủy", urlAvatar: "https://www.gocbao.com/wp-content/uploads/2019/09/stt-hay-khi-dang-anh-con-gai1.jpg6_.jpg"}
    ]
  }
  render() {
    return (
      <div className="App">
        {/* <Header/>
        <FormLogin email="abc@example.com"/>
        <TabMenu items = {this.items}/> */}
        <RecommendedFriends friends={this.friends}/>
      </div>
    );
  }
}

export default App;
