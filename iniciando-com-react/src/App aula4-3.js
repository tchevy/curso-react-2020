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
  
 criaComboBox = () => {
   const opcoes = [ "Roberto"," Meiriane" ]
   const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

   return (
     <select>
        {comboBoxOpcoes}
     </select>
   )
 }

  render(){
// CRIANDO TAG
      const MeuComboBox = () => this.criaComboBox()
//FIM DA TAG
    return (
  //CHAMAR A TAG NO COMPONENTE
  <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome} </h1>
        
        <MeuComboBox/>
      </>
    )
  }


}

export default App;
