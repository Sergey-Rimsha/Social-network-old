import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree();

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});