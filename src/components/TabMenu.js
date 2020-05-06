import React, { Component } from 'react';
import './TabMenu.css';

class TabMenu extends Component {
  render() {
    return (
      <div class="tabMenu">
        <div class="home">
          <div>
            <img alt="" src="https://image.flaticon.com/icons/png/512/1297/1297859.png" />
          </div>
          <div>
            <span>HOME</span>
          </div>
        </div>
        <div class="deals">
          <div>
            <img alt="" src="https://image.flaticon.com/icons/svg/548/548427.svg" />
          </div>
          <div>
            <span>DEALS</span>
          </div>
        </div>
        <div class="upload">
          <div>
            <img alt="" src="https://image.flaticon.com/icons/svg/1103/1103496.svg" />
          </div>
          <div>
            <span>UPLOAD</span>
          </div>
        </div>
        <div class="work">
          <div>
            <img alt="" src="https://image.flaticon.com/icons/svg/633/633652.svg" />
          </div>
          <div>
            <span>WORK</span>
          </div>
        </div>
        <div class="settings">
          <div>
            <img alt="" src="https://image.flaticon.com/icons/svg/2099/2099058.svg" />
          </div>
          <div>
            <span>SETTINGS</span>
          </div>
        </div>
      </div>
     );
  }
}

export default TabMenu;