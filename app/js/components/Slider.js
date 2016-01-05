import React from 'react';
import Carousel from 'nuka-carousel';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        carousels: {}
    };
  }
  setCarouselData(carousel) {
      var data = this.state.carousels;
      data[carousel] = this.refs[carousel];
      this.setState({
        carousels: data
      });
  }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}> 
        <Carousel 
        ref="carousel" 
        data={this.setCarouselData.bind(this, 'carousel')}> 
          <img src="http://placehold.it/1000x400&text=slide1"/> 
          <img src="http://placehold.it/1000x400&text=slide2"/> 
          <img src="http://placehold.it/1000x400&text=slide3"/> 
          <img src="http://placehold.it/1000x400&text=slide4"/> 
          <img src="http://placehold.it/1000x400&text=slide5"/> 
          <img src="http://placehold.it/1000x400&text=slide6"/> 
        </Carousel> 
      </div> 

    )
  }
}