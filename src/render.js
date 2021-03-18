import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {addPost} from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} newPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}