// This component takes data from the state, cycle through it using the map method
//     and output it on the browser
// There is a use of props here and some distructuring

import React from "react";

const Ninjas = (props) => {
  const ninjas = props.ninjas;
  const deleteNinja = props.deleteNinja;
  const listAllNinjas = ninjas.map((ninja) => {
    if (ninja.age >= 20) {
      return (
        <div key={ninja.id}>
          <p>My Name is: {ninja.name}</p>
          <p>My Age: {ninja.age}</p>
          <p>My Belt Colour: {ninja.belt}</p>
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
          <br /><br/>
        </div>
      );
    } else {
      return null
    }
    
  });
  return <div>{listAllNinjas}</div>;
};

export default Ninjas;
