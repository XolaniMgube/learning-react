// This comoponent changes the name on the h1 as you type and then
//     when you press submit or enter in consoles the name.
// I've also used the prevent submit feature so that it does not submit the form
//     when you press the button since it is inside the form.

import React from 'react';

class HandleChangeAndSubmit extends React.Component {
  state = {
    name: "Xolani",
    age: 22,
  };

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(`You changed the name to ${this.state.name}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Hi, my name is {this.state.name}</h1>
          <input onChange={this.handleOnChange} type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default HandleChangeAndSubmit
