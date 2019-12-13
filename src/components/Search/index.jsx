import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './Search.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      isVisible: false
    };
  }

  handleValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      this.getAnalytics();
    });
  }

  handleChange = _.debounce(this.handleValue, 1500);

  getAnalytics() {
    axios.get(`https://images-api.nasa.gov/search?q=${this.state.query}`)
      .then((resp) => {
        console.log(resp);
        this.setState({
          data: resp.data.collection.items,
          isVisible: true
        })
      })
      .catch(() => {
        this.setState({
          isVisible: false
        });
      })
  }

  render() {
    let slider;

    if (this.state.isVisible === true) {
      slider = <Slider>
        {this.state.data.map((item) => {
            if (item.links === undefined) {
              return (
                <div className="Search__Elem">
                  Not loaded image
                </div>
              )
            } else {
              return (
                <div className="Search__Elem">
                  <img src={item.links[0].href} alt="capture" key={item.data[0].nasa_id}/>
                </div>
              )
            }
          }
        )}
      </Slider>
    } else {
      slider = <div className="Search__NoResults"> No content, please type word in search</div>
    }

    return (
      <div className="Search" id="search">
        <div className="Search__Title">Search all Photos</div>
        <div className="Search__Box">
          <input type="text"
                 name="query"
                 className="Search__Input"
                 onChange={e => {
                   e.persist();
                   this.handleChange(e)
                 }}
          />
        </div>
        <div className="Search__Body">
          {slider}
        </div>
      </div>
    )
  }
}

export {Search}
