import React, { Component } from 'react';
import { connect } from 'react-redux';
import OnOffSwitch from './OnOffSwitch';
import PlayerSection from './PlayerSection';
import RevealNumbers from './RevealNumbers';
import '../styles/MasterMind.scss';
import { RESTART_GAME } from '../actions/actionTypes';

class MasterMind extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.onTryAgain = this.onTryAgain.bind(this);
  }
  onTryAgain() {
    this.props.dispatch({
      type: RESTART_GAME
    });
  }
  renderContent() {
    if (this.props.win === true) {
      return (
        <div>
          <h2>You Win!</h2>
          <h3>Your time: {(Date.now() - this.props.startTime) / 1000}s</h3>
          <button onClick={this.onTryAgain}>Try again</button>
        </div>
      );
    }
    if (this.props.win === false) {
      return (
        <div>
          <h2>You Lost!</h2>
          <h3>numbers: {this.props.numbers.map(num => `${num}`)}</h3>
          <button onClick={this.onTryAgain}>Try again</button>
        </div>
      );
    }
    if (this.props.power) {
      return (
        <div className="game__body">
          <RevealNumbers />
          {this.props.turn > 1 ? (
            <div className="game__results">
              <div className="game__results_detail">
                <p>Correct numbers: </p>
                <div className="game__results_score">{this.props.score[0]}</div>
              </div>
              <div />
              <div className="game__results_detail">
                <p>Correct numbers in right position</p>
                <div className="game__results_score">{this.props.score[1]}</div>
              </div>
              <div>game nums: {this.props.numbers}</div>
            </div>
          ) : (
            <div>
              <h3>Pick your numbers</h3>
            </div>
          )}
          <h2 className="game__turn">turn: {this.props.turn}</h2>
          <PlayerSection />
        </div>
      );
    }
  }
  renderHeader() {
    return this.props.won ? 'You won!' : "It's Master Mind game!";
  }
  render() {
    console.log(this.props);
    const headerClass = this.props.game
      ? 'game__header game__header--highlight'
      : 'game__header';
    return (
      <div className="game">
        <h1 className={headerClass}>{this.renderHeader()}</h1>
        <OnOffSwitch />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(MasterMind);
