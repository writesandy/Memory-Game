import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import desserts from "./dessert.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    desserts
  };

  handleClick = (id) => {
    console.log("clicked", id);
    this.updateClickCounter(id);
    //add update to state for score
    //if the top score is lower than the current score update top score.
  }

  updateClickCounter = (id) => {
    desserts.forEach(dessert => {
      if (dessert.id === id) {
        dessert.clickCount++;
        if (dessert.clickCount > 1){
          console.log('Game Over')
        }
    }

  })
}



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Decadent Dessert</Title>
        {this.state.desserts.map(dessert => (
          <FriendCard
            id={dessert.id}
            key={dessert.id}
            name={dessert.name}
            image={dessert.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
