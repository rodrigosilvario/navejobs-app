import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './nave.css'
import { Provider } from "react-redux";
import { Store } from "./store/store";

ReactDOM.render(
    <Provider store={Store}>
        <Router> 
            <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

