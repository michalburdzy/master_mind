import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnOffSwitch extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  renderContent() {
    return this.props.game ? 'Off' : 'On';
  }
  onButtonClick() {
    this.props.dispatch({ type: 'onoff' });
  }
  render() {
    return <button onClick={this.onButtonClick}>{this.renderContent()}</button>;
  }
}

const mapStateToProps = state => {
  return { game: state.game };
};

export default connect(mapStateToProps)(OnOffSwitch);
