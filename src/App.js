import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cards  from './Cards';
import {robots} from './robots';

class App extends Component {


  render(){
  return (
    <div>
      <Cards id = {robots[0].id} name = {robots[0].name} email = {robots[0].email}/>
      <Cards id = {robots[1].id} name = {robots[1].name} email = {robots[1].email}/>
      <Cards id = {robots[2].id} name = {robots[2].name} email = {robots[2].email}/>
    </div>
  
  )
}
}


export default App;
