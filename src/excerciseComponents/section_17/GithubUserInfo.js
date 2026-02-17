import axios from 'axios';
import { Component } from 'react';

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: '',
      name: '',
    };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);

    this.setState({
      imgUrl: response.data.avatar_url,
      name: response.data.name,
    });
  }

  render() {
    return (
      <div>
        <h1>Github User: {this.state.name}</h1>
        <img src={this.state.imgUrl} alt={this.state.name} />
      </div>
    );
  }
}

export default GithubUserInfo;
