import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import DashboardPage from './containers/DashboardPage';
import FriendPage from './containers/FriendPage';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={DashboardPage} />
      <Route exact path= '/friends/:id' component={FriendPage}/>
    </Router>
  )
}

export default App;
