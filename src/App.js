import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import JSONdesserts from "./dessert.json";
import "./App.css";
import Nav from "./components/Nav";
import { Game, GameContainer } from "./components/Game";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    desserts: JSONdesserts,
    message: "Click on an image to begin!",
    clicked: []
  };


  handleClick = (id) => {
    console.log("clicked", id);
    this.updateClickCounter(id);
    //add update to state for score
    //if the top score is lower than the current score update top score.
  }


  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

gameOver(){
  console.log("Game is over")

  this.setState({
    score: 0,
    topScore: this.checkHighScore(),
    clicked: [],
    desserts: JSONdesserts,
    message: "You already clicked that! Start over!"
  })
}

 checkHighScore() {   
    if(this.state.score === this.state.desserts.length) {
      return this.state.score
    }
    else if (this.state.topScore === this.state.score) {
      return this.state.score + 1
    }
    else {
      return this.state.topScore
    }
  }

  updateClickCounter = (id) => {
    let clickedArray = this.state.clicked.slice();
    clickedArray.push(id);
    if (this.state.clicked.includes(id)) {
      return this.gameOver();
    }

    this.state.desserts.forEach(dessert => {
      if (dessert.id === id) {
        console.log("Does it get to this line");
        dessert.clickCount++;      
          this.setState({
            score: this.state.score + 1,
            topScore: this.checkHighScore(),
            desserts: this.shuffle(this.state.desserts),
            message: "You got a point!",
            clicked: clickedArray

          })

        
      }

    })


  }

  componentDidUpdate() {
    console.log(this.state);
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.topScore} />
        <Jumbotron />

        <GameContainer>
          {this.state.desserts.map(dessert => {
            return (
              <Game
                id={dessert.id}
                key={dessert.id}
                name={dessert.name}
                image={dessert.image}
                handleClick={this.handleClick}

              />
            );
          })}
        </GameContainer>

      </div>
    );
  }
}

export default App;
