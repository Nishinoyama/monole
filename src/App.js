import './App.css';
import Key from './Key';
import Guess from './Guess';
import React from 'react';
import Share from "./Share";

const chars = "QWERTYUIOPASDFGHJKLZXCVBNM"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      answer: chars.charAt(Math.floor(Math.random() * chars.length)),
      winning: false,
    }
  }

  clickKey(letter) {
    const guesses = this.state.guesses;
    this.state.guesses.push(letter);
    this.setState({
      guesses: guesses,
      answer: this.state.answer,
      winning: letter === this.state.answer,
    })
  }

  handleShare() {
    navigator.clipboard.writeText('Monole 1/1\n🟩')
    alert('Copied to clipboard')
  }

  renderGuesses() {
    const guesses = this.state.guesses.map((l, i) =>
      <Guess key={i} value={l} answering={l === this.state.answer ? 'Correct' : 'Wrong'}/>
    )
    if (!this.state.winning) {
      guesses.push(<Guess key={this.state.guesses.length} value={null} answering={'None'}/>)
    }
    return guesses
  }

  renderKey(letter) {
    return <Key value={letter} onClick={() => this.clickKey(letter)}/>
  }

  renderShare() {
    if (this.state.winning) {
      return <Share value={this.state.guesses.length} onClick={() => this.handleShare()}/>
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div id='Title'>
            <h1>
              MONOLE
            </h1>
          </div>
        </header>
        {this.renderGuesses()}
        {this.renderKey(this.state.answer)}
        {this.renderShare()}
      </div>
    );
  }
}

export default App;
