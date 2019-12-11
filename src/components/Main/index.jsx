import React from 'react';
import axios from 'axios';

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
    axios.get('https://api.nasa.gov/planetary/apod?api_key=9m5UtCZosuPpVNC4B2v8Qzznb1fpXy7hWZiSIJEH&hd=true&date=2019-12-10')
    .then((resp) => {
      this.setState({
        imgHdUrl: resp.data.hdurl,
        title: resp.data.title
      })
    })
  }

  render() {
    return (
      <div className="Main">
        <h1 className="Main__Title">{this.state.title}</h1>
        <img className="Main__Img" src={this.state.imgHdUrl} alt="main banner" />
      </div>
    )
  }
}

export {Main}
