import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';
import RevealNumbers from './RevealNumbers';

import '../styles/Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = { showModal: false, scores: [] };
    this.handleClick = this.handleClick.bind(this);
    this.renderScores = this.renderScores.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  handleClick() {
    this.setState({ showModal: !this.state.showModal });
    let scores = localStorage.getItem('scores');
    if (scores) {
      scores = JSON.parse(scores);
      this.setState({ scores: [...scores] });
      console.log(scores);
    } else {
      console.log('no scores');
    }
  }
  renderScores() {
    let { scores } = this.state;
    if (scores.length === 0) {
      return <h3>No scores yet</h3>;
    }
    return scores.map((el, i) => {
      return (
        <li key={i}>
          {el.name} - {el.turn} turn - {el.time / 1000}s
        </li>
      );
    });
  }
  onCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="header">
        <div className="header__nav">
          <div
            className={
              this.state.showModal
                ? 'header__modal'
                : 'header__modal header__modal--hidden'
            }
          >
            <div className="header__modalClose" onClick={this.onCloseModal}>
              X
            </div>
            <h2>Best Scores</h2>
            <ol className="header__scores">{this.renderScores()}</ol>
          </div>
          <OnOffSwitch />
          {this.props.gameIsOn === true && this.props.win === null ? (
            <RevealNumbers />
          ) : (
            ''
          )}
          <button onClick={this.handleClick}>10 Best scores</button>
        </div>
        <h1 className={this.props.headerClass}> It's Master Mind game!</h1>
      </div>
    );
  }
}

export default Header;
