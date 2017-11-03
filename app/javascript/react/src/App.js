import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import DashboardPage from './containers/DashboardPage';
import FriendPage from './containers/FriendPage';
import InteractionEditPage from './containers/InteractionEditPage'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={DashboardPage} />
      <Route exact path= '/friends/:id' component={FriendPage}/>
      <Route exact path= '/friends/:friend_id/interactions/:id/edit' component={InteractionEditPage} />
      </Router>
      )
      }

export default App;
