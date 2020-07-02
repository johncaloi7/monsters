import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/searchbox/search.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(e => console.log(e + 'You god damn noob!'))
  }

  handleChange = (e) => this.setState({searchfield: e.target.value }) 

  render = () => {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>  monster.name.toLowerCase().includes(searchfield.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        < SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };
};

export default App;
