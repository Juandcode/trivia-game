import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppStateProvider} from "./state/AppStateContext";
import reportWebVitals from './reportWebVitals';
import {makeApolloClient} from "./utils/apollo";
import {ApolloProvider} from "@apollo/client";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={makeApolloClient()}>
            <AppStateProvider>
                <App/>
            </AppStateProvider>
        </ApolloProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
