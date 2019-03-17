import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.addValue = this.addValue.bind(this);
    this.subtractValue = this.subtractValue.bind(this);
  }
  addValue() {
    if (this.state.value >= 9) {
      return;
    }
    this.setState({ value: this.state.value + 1 }, () =>
      this.props.onInputChange(this.state.value, this.props.inputIndex),
    );
  }
  subtractValue() {
    if (this.state.value <= 0) {
      return;
    }
    this.setState({ value: this.state.value - 1 }, () =>
      this.props.onInputChange(this.state.value, this.props.inputIndex),
    );
  }
  render() {
    return (
      <div className="panel__inputGroup">
        <input
          maxLength="1"
          className="panel__input"
          type="number"
          value={this.state.value}
          min="0"
          max="9"
          onChange={this.props.onInputChange}
          id={'input-' + this.props.inputIndex}
        />
        <button
          className="panel__button panel__button--plus"
          type="button"
          onClick={this.addValue}
        >
          &uarr;
        </button>
        <button
          className="panel__button panel__button--minus"
          type="button"
          onClick={this.subtractValue}
        >
          &darr;
        </button>
      </div>
    );
  }
}

export default Input;
