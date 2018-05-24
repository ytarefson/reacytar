// import './header.scss';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <div>
      Header
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
    </div>
  );
}