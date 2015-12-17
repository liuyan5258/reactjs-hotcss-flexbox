import React from 'react';
import { Link } from 'react-router';

export default class Demo extends React.Component {
  render(){
    return (
      <div className="g-content">
        <ul className="m-demo-list">
          <li><Link to="/modals">modals</Link></li>
          <li>tabs</li>
          <li>buttons</li>
        </ul>
      </div>
    )
  }
}