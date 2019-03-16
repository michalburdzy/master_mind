import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_PLAYER_NAME } from '../actions/actionTypes';

class EnterPlayerName extends Component {
  constructor() {
    super();
    this.state = { playerName: '' };
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.onNameEnter = this.onNameEnter.bind(this);
  }
  onButtonSubmit() {
    this.props.dispatch({
      type: SET_PLAYER_NAME,
      playerName: this.state.playerName
    });
  }
  onNameEnter(e) {
    this.setState({
      playerName: e.target.value
    });
  }
  render() {
    return (
      <div>
        <label htmlFor="playerName">Player Name</label>
        <input
          onChange={this.onNameEnter}
          type="text"
          name="playerName"
          value={this.state.playerName}
        />
        <button onClick={this.onButtonSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect()(EnterPlayerName);
