import React from 'react';
import axios from 'axios';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './Slider.css';

class SliderRover extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      source: []
    };
    this.getImageNasa();
  }

  getImageNasa() {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9m5UtCZosuPpVNC4B2v8Qzznb1fpXy7hWZiSIJEH')
      .then((resp) => {
        let arr = resp.data.photos;
        this.setState({
          source: arr,
        })
      })
  };

  render() {
    return (
      <div className="Slider" id="rover">
        <h1 className="Slider__title"> Photos by Mars rover Curiosity</h1>
        <Slider>
          {this.state.source.map((item, index) => <div key={index}>
            <img src={item.img_src} alt=""/>
          </div>)}
        </Slider>
      </div>
    )
  }
}

export { SliderRover };

