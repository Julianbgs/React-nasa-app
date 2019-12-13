import React from 'react';
import Modal from '../Modal'
import info from './info.png';

import './Header.css';

class Header extends React.Component {

    state = {
      isShowing: false
    };

  handleModalShow = () => {
    this.setState((state) => ({
      isShowing: !state.isShowing
    }))
  };

  handleScrollElem = (e) => {
    let elem = e.target;
    elem.scrollIntoView({
      behavior: 'smooth'
    });

  }

  render() {
    return (
      <header className="Header">
        <nav className="Header__Nav">
          <ul className="Header__Menu">
            <li className="Header__Elem">
              <a className="Header__Link" href="#home" onClick={(e) => {this.handleScrollElem(e)}}> Home </a>
            </li>
            <li className="Header__Elem">
              <a className="Header__Link" href="#rover" onClick={(e) => {this.handleScrollElem(e)}}> Mars Rover </a>
            </li>
            <li className="Header__Elem">
              <a className="Header__Link" href="#search" onClick={(e) => {this.handleScrollElem(e)}}> Search </a>
            </li>
          </ul>
        </nav>
        <div className="Header__Info" onClick={this.handleModalShow}>
          <img src={info} alt=""/>
        </div>
        <Modal  onClose={this.handleModalShow} show={this.state.isShowing}></Modal>
      </header>
    )
  }
}

export {Header};
