import React from 'react';
import ReactDOM from 'react-dom';
import MasterMind from '../../components/MasterMind';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';
const store = createStore(rootReducer);

it('runs tests correctly', () => {
  expect(3).toEqual(1 + 2);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MasterMind />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
