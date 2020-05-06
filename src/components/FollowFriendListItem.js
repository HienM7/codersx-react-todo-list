import React, { Component } from 'react';
import './FollowFriendListItem.css';

class FollowFriendListItem extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  }
  
  render() {
    return (
      <div class="container">
        <div class="avatar">
          <img src={this.user.urlAvatar} alt=""/>
        </div>
        <div class="content">
          <div class="name">
            {this.user.name}
          </div>
          <div class="description">
            Recommend for you
          </div>
        </div>
        <div>
          <a href="/">Follow</a>
        </div>
      </div>
     );
  }
}

export default FollowFriendListItem;