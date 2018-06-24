import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import desserts from "./dessert.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    desserts
  };

  removeDessert = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const desserts = this.state.desserts.filter(dessert => desserts.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ desserts });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Decadent Dessert</Title>
        {this.state.desserts.map(dessert => (
          <FriendCard
            removeDessert={this.removeDessert}
            id={dessert.id}
            key={dessert.id}
            name={dessert.name}
            image={dessert.image}
            occupation={dessert.occupation}
            location={dessert.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
