import React from 'react';
import axios from 'axios';
import banner from'./space.jpg';

import './Main.css'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgHdUrl: '',
      title: ''
    };

    this.getSinglePhoto();
  }

  getSinglePhoto() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=9m5UtCZosuPpVNC4B2v8Qzznb1fpXy7hWZiSIJEH&hd=true')
    .then((resp) => {
      this.setState({
        imgHdUrl: resp.data.hdurl,
        title: resp.data.title
      })
    })
    .catch(() => {
      this.setState({
        imgHdUrl: 'error'
      })
    })
  }

  render() {
    let mainBanner;

    if(this.state.imgHdUrl !== 'error') {
      mainBanner = <div className="Main__Banner">
        <h1 className="Main__Title">{this.state.title}</h1>
        <img className="Main__Img" src={this.state.imgHdUrl} alt="main banner"/>
      </div>;
    } else {
      mainBanner = <div className="Main__Banner">
        <h1 className="Main__Title">Nasa Open Api</h1>
        <img className="Main__Img" src={banner} alt="main banner" />
      </div>
    }

    return (
      <div className="Main" id="home">
        {mainBanner}
      </div>
    )
  }
}

export {Main}
