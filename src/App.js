import React, { Component } from 'react';
import './App.scss';
import Component_MenuSuperior from './components/MenuSuperior/Component_MenuSuperior';
import Component_Conteudo from './components/Conteudo/Component_Conteudo';

class App extends Component {
  render() {
    return (
      <div>
        <Component_MenuSuperior/>
        <Component_Conteudo/>
        
      </div>
    );
  }
}

export default App;
