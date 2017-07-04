import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import { AuthRoutes, NonAuthRoutes } from './routes';
import Main from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {store} from './store/configureStore';
import createHistory from 'history/createBrowserHistory'

injectTapEventPlugin();
const history = createHistory()

class App extends Component {
  render() {
    console.log(this.props)
    let isAuthenticated = store.getState().auth.is_Authenticated;
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Main>
            {isAuthenticated
              ? <AuthRoutes />
              : <NonAuthRoutes />
            }
            </Main>
          </div>  
          </Router>
        </Provider>
    );
  }
}

export default App;