import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SURRENDER } from '../actions/actionTypes';

class RevealNumbers extends Component {
  constructor() {
    super();
    this.onSurrender = this.onSurrender.bind(this);
  }
  onSurrender() {
    this.props.dispatch({ type: SURRENDER });
  }
  render() {
    return (
      <div>
        <button onClick={this.onSurrender}>Show numbers</button>
      </div>
    );
  }
}

export default connect()(RevealNumbers);
