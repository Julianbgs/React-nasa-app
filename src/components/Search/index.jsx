import React from 'react';
import axios from 'axios';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    //this.handleValue.bind(this);
    this.getAnalytics();
  }

  handleValue = debounce((e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.query);
  }, 500)

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
              onChange={this.handleValue}
        />
      </div>
    )
  }

}

export { Search }
