import React from 'react';
import './App.css';
import key from './api.txt'

class App extends React.Component {

  state={
    memes:[],
    loading:false,
    text:''
  }

  getMemes = async (e) => {
    e.preventDefault()
    this.setState({loading: true})
    var apiKey = key
    var url = `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${key}`
  }

  render() {
    var {memes, loading, text} = this.state
    return (
      <div className="App">
        <form className="App-header" onSubmit={this.getMemes}>
          <input value={text}
            onChange={e=> this.setState({text: e.target.value})}/>
          <button disabled={loading || !text} type='submit'>
            Search
          </button>
        </form>
      </div>
    );
  }
}


export default App;
