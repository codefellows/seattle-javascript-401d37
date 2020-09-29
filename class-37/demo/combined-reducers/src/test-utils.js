// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// Import/combine your own reducer/s
import candidates from './store/candidates.js';
import votes from './store/votes.js';

let reducers = combineReducers({ candidates, votes });

function render(
  ui,
  {
    store = createStore(reducers),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }