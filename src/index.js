import React from 'react';
import {render} from "react-dom";
import Backbone from 'backbone';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './bootstrap.min.css'
import App from './App';
import Main from './views/Main';
import LeaderBoard from './views/Leaderboard';



let content = document.getElementById('root');

const Router = Backbone.Router.extend({
    routes: {
      ''    : 'index',
      'leaderboard' : 'leaderboard',
    },
    index: function() {
      render(
          <App id="index" router={router}>
              <Main />
          </App>
        , content)
    },
    leaderboard: function() {
      render(
          <App id="leaderboard">
            <LeaderBoard />
          </App>
        , content)
      }
  })
  
  let router = new Router()
  Backbone.history.start()
  




//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
