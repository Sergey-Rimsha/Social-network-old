import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {newPost, newStateText, addMessege, newMessege, subscribe} from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <App 
            newMessege = {newMessege}
            newStateText = {newStateText} 
            state={state} 
            newPost={newPost}
            addMessege = {addMessege}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);