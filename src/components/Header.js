import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';
import '../styles/Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showModal: !this.state.showModal });
    let scores = localStorage.getItem('scores');
    if (scores) {
      scores = JSON.parse(scores);
      console.log(scores);
    } else {
      console.log('no scores');
    }
  }

  render() {
    return (
      <div>
        <div
          className={
            this.state.showModal
              ? 'header__modal'
              : 'header__modal header__modal--hidden'
          }
        >
          MODAL HERE
        </div>
        <OnOffSwitch />
        <button onClick={this.handleClick}>Best scores</button>
        <h1 className={this.props.headerClass}> It's Master Mind game!</h1>
      </div>
    );
  }
}

export default Header;
