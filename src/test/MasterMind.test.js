import React from 'react';
import ReactDOM from 'react-dom';
import MasterMind from '../components/MasterMind';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MasterMind />, div);
  ReactDOM.unmountComponentAtNode(div);
});
