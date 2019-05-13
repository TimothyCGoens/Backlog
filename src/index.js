import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BaseLayout } from './Components/BaseLayout';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import reducer from './store/reducer.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Login} from './Components/LogIn'
import {Register} from './Components/Register'
import {Profile} from './Components/Profile'
import {Backlog} from './Components/Backlog'
import {Search} from './Components/Search'

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(

    <BrowserRouter>
        <BaseLayout>
            <Switch>

                <Route path='/' exact component={App} />
                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={Login} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/search' exact component={Search} />
                <Route path='/backlog' exact component={Backlog} />


            </Switch>
        </BaseLayout>
    </BrowserRouter>





, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
