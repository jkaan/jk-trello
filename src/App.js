import React from 'react'
import './App.css'
import BoardContainer from './BoardContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './Actions/reducers'
import ActiveBoardContainer from './ActiveBoardContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const initialState = {
  boards: {},
  boardIds: []
}

let store = createStore(rootReducer, JSON.parse(localStorage.getItem('state')) || initialState);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
})

export default () => (
    <Provider store={store}>
      <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Route exact path="/" component={BoardContainer}/>
        <Route path="/b/:id" component={ActiveBoardContainer}/>
      </div>
      </Router>
    </Provider>
);
