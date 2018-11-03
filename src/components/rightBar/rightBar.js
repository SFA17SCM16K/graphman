import React, { Component } from 'react';
import RequestParams from './RequestParams'
import './rightBar.css'

class rightBar extends Component {

  render() {
    return(
      <div className="right-root">
        <RequestParams />
      </div>

    )
  }
}

export default rightBar;
