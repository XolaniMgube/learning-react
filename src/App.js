import React from 'react';
import Ninjas from './components/Ninjas'
import AddNinja from './components/AddNinja'
import './App.css';

class App extends React.Component{

  state = {
    ninjas : [
      { name: "Xolani", age: 30, belt: "Black", id: 1},
      { name: "Njabulo", age: 20, belt: "Blue", id: 2},
      { name: "Momo", age: 10, belt: "Red", id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let newNinjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: newNinjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return(
      <div>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      </div>
    )
  }
}

export default App;
