import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ListFriend from './components/listFriend';
import App from "./App";
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
)
