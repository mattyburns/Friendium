import React, { Component } from 'react'
import FriendIndexComponent from '../components/FriendIndexComponent'
import FriendFormContainer from './FriendFormContainer'
import StatsComponent from '../components/StatsComponent'
import GoogleCharts from './ChartsContainer'
import add from '../components/images/add.png'
import ControllsComponent from '../components/ControllsComponent'
import heart_logo from '../components/images/heart_logo.png'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: [],
      currentUser: [],
      friends: [],
      daysSinceLastInteraction:"",
      interactionTypeStats:"",
      addFriend: false

    }
    this.addNewFriend = this.addNewFriend.bind(this)
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this)
    this.handleFriendshipStats = this.handleFriendshipStats.bind(this)
    this.handleFormToggle = this.handleFormToggle.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in',{
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({signedIn: body.signed_in})
      this.setState({currentUser: body.user})
    })
    fetch('/api/v1/friends', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ friends: body.friends })
    })
  }

  addNewFriend(payLoad) {
    fetch(`/api/v1/friends`, {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ friends: [responseData, ...this.state.friends] })
    })
  }

  handleDeleteFriend(event) {
    let friendId = event.target.id
    fetch(`/api/v1/friends/${friendId}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(response => {
      this.setState( {friends: response.friends} )
    })
  }

  handleFriendshipStats(event){
    let friendId = event.target.id
    fetch(`/api/v1/friends/${friendId}`,{
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({daysSinceLastInteraction: body.days_since_last_interaction})
      this.setState({interactionTypeStats: body.interactionTypeStats})
    })
  }

  handleFormToggle(event){
    if (this.state.addFriend == false){
      this.setState({addFriend: true})
    }else {
      this.setState({addFriend:false})
    }
  }



  render() {
    let homePage;
    let addNewFriend = (event) => this.addNewFriend(event)
    let handleDeleteFriend = (event) => this.handleDeleteFriend(event)
    let handleFriendshipStats = (event) => this.handleFriendshipStats(event)
    let handleFormToggle = (event) => this.handleFormToggle(event)
    let charts;
    let data;
    if(this.state.interactionTypeStats == "" ){
      charts = <p></p>
    }else{
      data = [
        ["Interaction type","# of interactions"],
        ["Social Media Posts",this.state.interactionTypeStats.socialMedia],
        ["Texts",this.state.interactionTypeStats.text],
        ["Letters/Cards",this.state.interactionTypeStats.letterCard],
        ["Packages",this.state.interactionTypeStats.package],
        ["Phone Calls",this.state.interactionTypeStats.phoneCall],
        ["In-Person Conversations",this.state.interactionTypeStats.inPerson],
        ["Coffees/Meals",this.state.interactionTypeStats.coffee],
        ["Day Visits",this.state.interactionTypeStats.dayVisit],
        ["Multi-day Visits",this.state.interactionTypeStats.multiVisit],
      ]
      charts = <GoogleCharts data={data}
        daysSinceLastInteraction={this.state.daysSinceLastInteraction}/>
    }

    let friendForm;
    if(this.state.addFriend == true){
      friendForm=<FriendFormContainer
        currentUser={this.state.currentUser}
        addNewFriend={this.addNewFriend}/>
    }else {
      friendForm=<p></p>
    }

    if(this.state.signedIn == true){
      return(
        <div>
          <div className="small-12 small-centered medium-12 large-12 columns">
            {charts}
          </div>

          <div className="small-12 small-centered medium-8 large-4 columns">
            <FriendIndexComponent
              friends={this.state.friends}
              handleDeleteFriend ={this.handleDeleteFriend}
              handleFriendshipStats ={this.handleFriendshipStats}
            />
          </div>
          <div className="small-12 small-centered medium-8 large-4 columns">
            {friendForm}
            <img onClick={handleFormToggle} src={add} alt="add a new friend"/>
          </div>
        </div>
      )

    }else{
      return(
        <div className="small-12 small-centered medium-12 large-12 columns">
          <img className="logo" src={heart_logo} alt="heart" />
        </div>
      )
    }
  }
}

export default DashboardPage;
