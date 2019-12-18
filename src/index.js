import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import "./nave.css"

import App from './App';
import { loadUsers } from './redux/modules/user/actions/UserActions';

const store = configureStore();

store.dispatch(loadUsers());

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

