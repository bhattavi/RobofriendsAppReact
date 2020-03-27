import React, {Component} from 'react';
import './App.css';
import CardList  from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';

class App extends Component {

  constructor(){
    
    super();

    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {

    this.setState({
      searchfield: event.target.value
    })

    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }


  render(){

    const {robots, searchfield} = this.state;
    const filterdRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
   return !robots.length ? <h1>Loading...</h1> :
   
    <div className="tc">
      <h1 className="f2">Robofriends</h1>
      <SearchBox searchChange = {this.onSearchChange} />
      <Scroll>
        <ErrorBoundry>
      <CardList robots = {filterdRobots}/>
      </ErrorBoundry>
      </Scroll>
  
    </div>
  
 
}
}


export default App;
