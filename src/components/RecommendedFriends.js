import React, { Component } from 'react';
import './RecommendedFriends.css';
import FollowFriendListItem from './FollowFriendListItem';

class RecommendedFriends extends Component {
  constructor(props) {
    super(props);
    this.friends = this.props.friends;
  }
  render() {
    return (
        <div>
          <div className="header">
            <span>Recommend for you</span>
            <span>Display all</span>
          </div>
          {this.friends.map((friend, index) => {
              return <FollowFriendListItem user={friend} key={index} />
          })}
        </div>
     );
  }
}

export default RecommendedFriends;