import React from 'react';

class App extends React.Component {
  state = {
    nome : 'Roberto Nascimento'
  }
  render(){
    return (
      <h1>Hello {this.state.nome}</h1>
      )
  }

}
export default App;
