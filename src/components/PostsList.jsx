import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Post from './Post';

export default class PostsList extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
      })
    ),
    onLoadClick: PropTypes.func
  }
  static defaultProps = {
    posts: []
  }
  handleOnClick = (event) => {
    const { onLoadClick } = this.props;

    if (typeof onLoadClick === 'function') {
      onLoadClick();
    }
    event.preventDefault();
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <ul>
          {posts.map((post) => <li key={post.id}><Link to={`/posts/${post.id}`}><Post post={post} /></Link> </li> )}
        </ul>
      </div>
    )
  }
}