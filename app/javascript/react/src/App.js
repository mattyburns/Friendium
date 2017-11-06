import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import DashboardPage from './containers/DashboardPage';
import FriendPage from './containers/FriendPage';
import InteractionEditPage from './containers/InteractionEditPage';
import FriendEditPage from './containers/FriendEditPage';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={DashboardPage} />
      <Route exact path= '/friends/:id' component={FriendPage}/>
      <Route exact path= '/friends/:friend_id/interactions/:id/edit' component={InteractionEditPage} />
      <Route exact path= '/friends/:id/edit' component={FriendEditPage}/>
    </Router>
  )
}

export default App;
