import React, { Component } from 'react';
import RequestComponent from '../RequestComponent';
import { Menu } from 'semantic-ui-react'
import Canvas from '../Canvas'
import RightBar from '../rightBar';
import './App.css';

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    const { activeItem } = this.state


    return (
      <div className="App">
        <Menu>
          <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
          >
            Add Request
          </Menu.Item>

          <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
            Export Request
          </Menu.Item>
        </Menu>
        <div className= "content-area">
          <Canvas />
          <RightBar />
        </div>


      </div>
    );
  }
}

export default App;
