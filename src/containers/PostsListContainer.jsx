import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Loading from 'components/Loading';
import PostsList from 'components/PostsList';

import { postLoadAction } from 'actions/posts';

class PostsListContainer extends PureComponent {
  componentDidMount() {
    const { loadPosts } = this.props;

    loadPosts();

  }
  render() {
    const { posts, isLoading } = this.props;
    return (
      <div>
        {isLoading ? <Loading /> : <PostsList posts={posts}/>}
      </div>
    );      
  }
}

function mapStateToProps(state,ownProps) {
  return {
    ...ownProps,
    isLoading: state.posts.loading,
    posts: state.posts.items
  }
};

function mapDispatchToProps(dispatch, ownProps) {
  return { 
    ...ownProps,
    loadPosts: () => postLoadAction(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer)