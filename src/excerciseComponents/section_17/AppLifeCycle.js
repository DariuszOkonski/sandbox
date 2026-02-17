import { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';

class AppLifeCycle extends Component {
  render() {
    return (
      <div>
        <GithubUserInfo username='facebook' />
        <GithubUserInfo username='colt' />
        <GithubUserInfo username='gaearon' />
        <GithubUserInfo username='sophiebits' />
      </div>
    );
  }
}

export default AppLifeCycle;
