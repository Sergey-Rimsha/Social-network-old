import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App 
            newMessege = {store.newMessege.bind(store)}
            newStateText = {store.newStateText.bind(store)} 
            state={state} 
            newPost={store.newPost.bind(store)}
            addMessege = {store.addMessege.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);