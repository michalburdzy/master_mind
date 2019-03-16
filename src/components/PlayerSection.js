import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/PlayerSection.scss';
import { PLAYER_BET, GET_NEW_NUMBERS } from '../actions/actionTypes';

class PlayerSection extends Component {
  constructor() {
    super();
    this.state = { inputValues: [0, 1, 2] };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch({ type: GET_NEW_NUMBERS });
  }
  onInputChange(i, e) {
    if (typeof e.target.value === 'string' && e.target.value !== '') {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      let newVal = parseInt(e.target.value);
      const newState = [...this.state.inputValues];
      newState[i] = newVal;
      this.setState({
        inputValues: newState
      });
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: PLAYER_BET,
      bet: this.state.inputValues
    });
  }
  render() {
    return (
      <form className="panel">
        <div className="panel__inputs">
          <input
            maxLength="1"
            className="panel__input"
            type="number"
            value={this.state.inputValues[0]}
            min="0"
            max="9"
            onChange={e => this.onInputChange(0, e)}
          />
          <input
            maxLength="1"
            className="panel__input"
            type="number"
            value={this.state.inputValues[1]}
            min="0"
            max="9"
            onChange={e => this.onInputChange(1, e)}
          />
          <input
            maxLength="1"
            className="panel__input"
            type="number"
            value={this.state.inputValues[2]}
            min="0"
            max="9"
            onChange={e => this.onInputChange(2, e)}
          />
        </div>
        <button
          type="submit"
          className="panel__submit"
          onClick={this.onFormSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { numbers: state.numbers };
};
export default connect(mapStateToProps)(PlayerSection);
