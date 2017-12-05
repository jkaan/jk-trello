import React from 'react'
import './App.css'
import BoardContainer from './BoardContainer'
import CreateBoard from './CreateBoard'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import trelloApp from './Actions/reducers'

let store = createStore(trelloApp, { boards: JSON.parse(localStorage.getItem('boards')) || [] })

store.subscribe(() => {
  const { boards } = store.getState();
  localStorage.setItem('boards', JSON.stringify(boards));
})

export default () => (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <CreateBoard />
        <BoardContainer />
      </div>
    </Provider>
);
