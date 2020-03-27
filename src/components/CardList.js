import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {

    // if(true) throw new Error("its not working");
  
    
    return(
        <div>
     { robots.map(robot => {
      return  <Card
       key = {robot.id} 
       id = {robot.id} 
       name = {robot.name} 
       email = {robot.email}
       />
  })}
      
    
        </div>
    );
}
export default CardList;