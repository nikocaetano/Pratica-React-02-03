// Crie um Component de class que retorne uma frase na tela

import React,{Component} from "react";

class App extends Component {
  state = {
    frase: 'Acredito que isso seja um componente de classe com state?'
  }
  render(){
    return (
      <div>
        <h1>{this.state.frase}</h1>
      </div>
    )
  }
}

export default App;

// Crie um Component de function e retorne uma frase na tela

/*import React from "react";

export default function Hello(){
  return (
    <div>
      <h1>Olha o componente de função aqui.</h1>
    </div>
  )
}*/