import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_PLAYER_NAME } from '../actions/actionTypes';

class EnterPlayerName extends Component {
  constructor() {
    super();
    this.state = { playerName: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onNameEnter = this.onNameEnter.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.playerName.length === 0) {
      return;
    }
    this.props.dispatch({
      type: SET_PLAYER_NAME,
      playerName: this.state.playerName,
    });
  }
  onNameEnter(e) {
    this.setState({
      playerName: e.target.value,
    });
  }
  componentDidMount() {
    const input = this.refs.playerName;
    input.select();
  }
  render() {
    return (
      <div className="game__body">
        <form className="game__playerName">
          <label htmlFor="playerName">Player Name</label>
          <input
            ref="playerName"
            onChange={this.onNameEnter}
            type="text"
            name="playerName"
            value={this.state.playerName}
          />
          <button type="submit" onClick={this.onFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(EnterPlayerName);
