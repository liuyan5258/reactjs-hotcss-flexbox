import React from 'react';

export default class App extends React.Component {
  render() {
    let content = React.cloneElement(this.props.children)
    return (
      <div className="container">
        { content }
      </div>
    );
  }
}
