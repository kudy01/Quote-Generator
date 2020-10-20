import React, { Component } from 'react';
import './App.css';
import './styles.css'
class App extends Component {

  constructor(){
    super();
    this.state = {
      quote: 'Intelligence is the ability to adapt to change.',
      author: 'Stephen Hawking',
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
      <h1 className="header">Quote Generator</h1>
      <div className="quote" id="quote-container">
        <h2 className="quote__text" >{this.state.quote}</h2>
        <p className="quote__author" >{this.state.author}</p>
        <button className="quote__button -new" onClick= {this.onClickGenerate} > New Quote </button>
      </div>
    </div>
  )

  }
}

export default App;
