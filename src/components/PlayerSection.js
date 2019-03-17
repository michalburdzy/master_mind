import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import '../styles/PlayerSection.scss';
import { PLAYER_BET, GET_NEW_NUMBERS } from '../actions/actionTypes';

class PlayerSection extends Component {
  constructor() {
    super();
    this.state = { inputValues: [0, 1, 2] };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }
  componentDidMount() {
    this.props.dispatch({ type: GET_NEW_NUMBERS });
  }
  onInputChange(e) {
    if (typeof e.target.value === 'string' && e.target.value !== '') {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      let newVal = parseInt(e.target.value);
      const newState = [...this.state.inputValues];
      newState[parseInt(e.currentTarget.id.split('-')[1])] = newVal;
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
  renderInputs() {
    return this.state.inputValues.map((val, i) => {
      return (
        <Input
          inputIndex={i}
          key={i}
          value={this.state.inputValues[i]}
          onInputChange={this.onInputChange}
        />
      );
    });
  }
  render() {
    return (
      <form className="panel">
        <div className="panel__inputs">{this.renderInputs()}</div>
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
