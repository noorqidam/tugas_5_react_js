import React, { Component } from 'react';
import MenuMakanan from "./Page/MenuMakanan";
import FormMakanan from "./Form/FormMakanan";

class App extends Component {
  render() {
    return (
      <div>
        <MenuMakanan />
        <FormMakanan />
      </div>
    );
  }
}

export default App;
