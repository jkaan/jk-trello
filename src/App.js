import React from 'react'
import './App.css'
import BoardContainer from './BoardContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import trelloApp from './Actions/reducers'
import ActiveBoardContainer from './ActiveBoardContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

let store = createStore(trelloApp, { boards: JSON.parse(localStorage.getItem('boards')) || [] })

store.subscribe(() => {
  const { boards } = store.getState();
  localStorage.setItem('boards', JSON.stringify(boards));
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
