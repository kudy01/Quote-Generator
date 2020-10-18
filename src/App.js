import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      quote: '',
      author: '',
      quotes: []
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
     .then(response => response.json())
     .then(data=> data.quotes)
     .then(quotes=> this.setState({quotes: quotes}))
     .catch(err=> console.log(err))
  }

  onClickGenerate = () => {
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length)
        this.setState({
            quote: this.state.quotes[randomIndex].quote,
            author: this.state.quotes[randomIndex].author
    })
  }

  render() {
  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick= {this.onClickGenerate}> Generate </button>
      <h2>{this.state.quote}</h2>
      <p>{this.state.author}</p>
    </div>
  )

  }
}

export default App;
