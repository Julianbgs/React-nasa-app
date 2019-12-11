import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleValue = _.debounce(this.handleValue, 1000);
    this.getAnalytics();
  }

  handleValue (e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.query);
  }

  getAnalytics() {
    axios.get('https://images-api.nasa.gov/search?q=mars')
      .then((resp) => {
        console.log(resp);
      })
  }

  render() {
    return(
      <div className="Search">
        <div>Im Analytics</div>
        <input type="text"
              name="query"
              onChange={ e => {
                e.persist();
                this.handleValue(e)
              }}
        />
      </div>
    )
  }

}

export { Search }
