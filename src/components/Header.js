import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="back">
            <img src="https://image.flaticon.com/icons/svg/545/545680.svg"/>
            <div>Go back</div>
          </div>
          <img src="https://coders-x.com/images/events/codersx.png"/>
          <button>Sign up</button>
        </div>
     );
  }
}

export default Header;