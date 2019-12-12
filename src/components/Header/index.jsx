import React from 'react';
import Modal from '../Modal'
import info from './info.png';

import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleScrollElem = this.handleScrollElem.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      isShowing: false
    }
  }

  handleShowModal() {
    this.setState({
      isShowing: true
    })
  }

  handleCloseModal = e => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  handleScrollElem(e) {
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
        <div className="Header__Info" onClick={this.handleShowModal}>
          <img src={info} alt=""/>
        </div>
        <Modal  onClose={this.handleCloseModal} show={this.state.isShowing}></Modal>
      </header>
    )
  }
}

export {Header};
