import React from 'react';
import ReactDOM from 'react-dom';
import OnOffSwitch from '../../components/OnOffSwitch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/rootReducer';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <OnOffSwitch />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
