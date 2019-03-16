import React, { Component } from 'react';
import { connect } from 'react-redux';
// import OnOffSwitch from './OnOffSwitch';
import PlayerSection from './PlayerSection';
import RevealNumbers from './RevealNumbers';
import EnterPlayerName from './EnterPlayerName';
import Header from './Header';
import '../styles/MasterMind.scss';
import { RESTART_GAME } from '../actions/actionTypes';

export class MasterMind extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
    this.onTryAgain = this.onTryAgain.bind(this);
  }
  onTryAgain() {
    this.props.dispatch({
      type: RESTART_GAME
    });
  }
  renderContent() {
    if (this.props.win === true) {
      let scores;
      scores = JSON.parse(localStorage.getItem('scores'));
      console.log(scores);
      if (
        typeof scores === 'object' &&
        Array.isArray(scores) &&
        scores.length > 0
      ) {
        scores.push({
          name: this.props.playerName,
          turn: this.props.turn,
          time: Date.now() - this.props.startTime
        });
        scores.sort((a, b) => a.time - b.time);
        scores = scores.slice(0, 10);
        localStorage.setItem('scores', JSON.stringify(scores));
      } else {
        scores = [];
        scores.push({
          name: this.props.playerName,
          turn: this.props.turn,
          time: Date.now() - this.props.startTime
        });
        localStorage.setItem('scores', JSON.stringify(scores));
      }
      return (
        <div>
          <h2>
            {this.props.playerName} win in {this.props.turn} turn!
          </h2>
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
      if (!this.props.playerName) {
        return <EnterPlayerName />;
      }
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
  render() {
    console.log(this.props);
    return (
      <div className="game">
        <Header
          headerClass={
            this.props.game === true ? 'header header--highlight' : 'header'
          }
        />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(MasterMind);
