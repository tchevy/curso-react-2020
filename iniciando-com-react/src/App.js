import React from 'react';

class App extends React.Component {
  state = {
    nome : ''
 
  }

  modificarNome = (event) => {
      this.setState({
       nome: event.target.value
     })
  }
  render(){
    return (
      <>
        <imput type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.setState.nome} </h1>
      </>
    )
  }


}

export default App;
