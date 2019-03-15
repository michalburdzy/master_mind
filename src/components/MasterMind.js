import React, { Component } from 'react';
import { connect } from 'react-redux';
import OnOffSwitch from './OnOffSwitch';
import PlayerSection from './PlayerSection';
import '../styles/MasterMind.scss';

class MasterMind extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }
  renderContent() {
    if (this.props.game) {
      return (
        <div className="game__body">
          {this.props.turn > 1 ? (
            <div>
              <div>
                <h3>Amount of good numbers: </h3>
                <div>{this.props.score[0]}</div>
              </div>
              <div />
              <div>
                <h3>Good numbers in right position</h3>
              </div>
              <div>{this.props.score[1]}</div>
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
    console.log(this.props);
    return this.props.won ? 'You won!' : "It's Master Mind game!";
  }
  render() {
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
