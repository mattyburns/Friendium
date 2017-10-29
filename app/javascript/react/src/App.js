import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import DashboardPage from './containers/DashboardPage';
import FriendPage from './containers/FriendPage';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={DashboardPage} />
        <Route path= 'friend_path' component={FriendPage}/>
      </Route>
    </Router>
  )
}

export default App;
