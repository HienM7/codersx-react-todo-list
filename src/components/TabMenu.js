import React, { Component } from 'react';
import './TabMenu.css';

class TabMenu extends Component {
  render() {
    const { items } = this.props;
    return (
      <div class="tabMenu">
      {
        items.map(item => {
          return (
            <div class="item">
              <div>
                <img alt="" src={item.src} />
              </div>
              <div>
                <span>{item.label}</span>
              </div>
            </div>
          );
        })
      }
      
      </div>
     );
  }
}

export default TabMenu;