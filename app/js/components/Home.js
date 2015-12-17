import React from 'react';

import Header from './Header';
import Demo from './Demo';
import Footer from './Footer';

export default class Home extends React.Component {
  render(){
    return (
      <div className="home">
        <Header />
        <Demo />
        <Footer />
      </div>
    )
  }
}

