import React from 'react';
import close from './close-modal.png';

import './Modal.css';


export default class Modal extends React.Component {

  handleCloseModal = e => {
    this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="Outer">
        <div className="Overlay" onClick={e => this.handleCloseModal(e)}/>
        <div className="Modal">
          <div className="Modal__Header">
            <img src={close} onClick={e => this.handleCloseModal(e)}/>
          </div>
          <div className="Modal__Body">
            <p className="Modal__Title">Open Nasa APIs</p>
            <p className="Modal__Descr">The objective of this APIs is to make NASA data, including imagery,
              eminently accessible to application developers.</p>
            <div className="Modal__Info">
              <p className="Modal__Author">Developer: Julian Blagis</p>
              <a className="Modal__Link" href="https://github.com/Julianbgs">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

