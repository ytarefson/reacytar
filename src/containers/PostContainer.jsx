import React, { PureComponent } from 'react';
import Loading from 'components/Loading';
import Post from 'components/Post';

export default class PostContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: false
    };
  }
  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true });
    fetch(`hppts://jsonplaceholder.typicode.com/posts/${match.params.id}`)
    .then((response) => response.json())
    .then((post) => {
      this.setState({ post, loading: false });
    })
    .catch(() => {
      this.setState({ post: {} });
    })
  }
  render() {
    const { loading, post } = this.state;
    return (
      loading ? <Loading /> : <Post post={post} />
    );
  }
}