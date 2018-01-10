import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Topo, Resultado, Painel } from './components/Index'

  // export default app7 = () => (
  //   <View>
  //     <Topo></Topo>
  //     <Resultado></Resultado>
  //     <Painel></Painel>
  //   </View>
  // )

export default class App extends Component{
  constructor(props) {
    super(props)

    this.state = { num1: '', num2: '',  operacao: 'soma', resultado: '' }

    //preserva o contexto lexico da funcao
    this.calcular = this.calcular.bind( this )
    this.atualizaValor = this.atualizaValor.bind( this )
    this.atualizaOperacao = this.atualizaOperacao.bind( this )
  }

  calcular(){
    let resultado = 0

    switch (this.state.operacao) {
      case 'soma':
          resultado = parseFloat( this.state.num1 ) + parseFloat( this.state.num2 )
        break;
      case 'subtracao' :
        resultado = parseFloat( this.state.num1 ) - parseFloat( this.state.num2 )
        break;
      default:
        resultado = 0

    }

    console.log(resultado)

    this.setState({ resultado: resultado.toString() })


  }

  atualizaValor(nomeCampo, numero){
    const obj = {}
    obj[nomeCampo] = numero
    this.setState(obj)
    console.log(obj)
  }

  atualizaOperacao(op){
    //quando o valor e igual a chave, pode se omitir a chave
    this.setState({ operacao: op })
    console.log(op)
  }

  render(){
    return(
        <View>
          <Topo />
          <Resultado resultado={ this.state.resultado }/>
          <Painel
                  num1={ this.state.num1 }
                  num2={ this.state.num2 }
                  operacao={ this.operacao }
                  calcular={ this.calcular }
                  atualizaValor={ this.atualizaValor }
                  atualizaOperacao={ this.atualizaOperacao }/>
        </View>
    )
  }
}
