import React, { Component } from 'react';
import congratulationsImage from './assets/images/congratulationsWithAbsoluteWin.jpg';

class GameOver extends Component {
  render() {
    const props = this.props;
    if (props.isTheEndOfGame) {
      if (props.score === 30) {
        return(
          <div className="GameOver">
            <h1 className="GameOver-heading">Congratulations!</h1>
            <span className="GameOver-text">You won with highest score! (30/30)!</span>
            <span className="GameOver-text">Now you are the professional in bird's songs.</span>
            <button className="GameOver-button" onClick={props.click}>Try again!</button>
            <img className="GameOver-image" src={congratulationsImage} alt="Congratulations"/>
          </div>
        )
      } else {
        return(
          <div className="GameOver">
            <h1 className="GameOver-heading">Congratulations!</h1>
            <span className="GameOver-text">You won with {props.score} from 30.</span>

            <button className="GameOver-button" onClick={props.click}>Try again!</button>
          </div>
        )
      }
    } else {
      return null;
    }

  }
}

export default GameOver;
