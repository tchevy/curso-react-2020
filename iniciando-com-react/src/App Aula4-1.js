import React from 'react';

class App extends React.Component {
  state = {
    nome : ''
 
  }

  constructor(){
    super()
    this.modificarNome = this.modificarNome.bind(this)
  }


  modificarNome(event){
      this.setState({
       nome: event.target.value
     })
  }
  render(){
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome} </h1>
      </>
    )
  }


}

export default App;
