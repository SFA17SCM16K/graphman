import React, { Component } from 'react';
import RequestParams from './RequestParams';
import Response from './Response';
import TestScript from './testScript'
import './rightBar.css'

class rightBar extends Component {

  render() {
    return(
      <div className="right-root">
        <RequestParams />
        <TestScript />
        <Response />
      </div>

    )
  }
}

export default rightBar;
