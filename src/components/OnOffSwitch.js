import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ON, OFF } from '../actions/actionTypes';

class OnOffSwitch extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  renderContent() {
    return this.props.power ? 'Turn 0ff' : 'Turn On';
  }
  onButtonClick() {
    const type = this.props.power ? OFF : ON;
    this.props.dispatch({ type });
  }
  render() {
    return <button onClick={this.onButtonClick}>{this.renderContent()}</button>;
  }
}

const mapStateToProps = state => {
  return { power: state.power };
};

export default connect(mapStateToProps)(OnOffSwitch);
