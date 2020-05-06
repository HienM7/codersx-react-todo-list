import React, { Component } from 'react';
import './FormLogin.css';

class FromLogin extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <form>
          <h1>Sign in</h1>
          <div>
            <label for='user'>Username</label>
            <input id="user" type="text" defaultValue={email || ""}/>
          </div>
          <div>
            <label for='pass'>Password</label>
            <input id="pass" type="password"/>
          </div>
          <button>Sign in to Coders-x</button>
          <div className="checkbox">
            <input id="checkbox"type="checkbox"/>       
            <label for="checkbox">Keep me signed in</label>
          </div>
          <div className="link">
            <a href="/">Forgot username?</a>
            <a href="/">Forgot password?</a>
          </div>
        </form>
      </div>
     );
  }
}

export default FromLogin;