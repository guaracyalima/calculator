import React from 'react'
import { View, Text} from 'react-native'

import Entrada from './Entrada'
import Operacao from './Operacao'
import Comando from './Comando'

const Painel = props => (
  // constructor(props){
  //   super(props)
  //
  //   //this.state = { num1: 0, num2: 0,  operacao: '' }
  //
  // }



  // render() {
  //   return(
      <View>
        <Entrada
                  num1={ props.num1 }
                  num2={ props.num2 }
                  atualizaValor={ props.atualizaValor }/>

        <Operacao
                  operacao={ props.operacao }
                  atualizaOperacao={ props.atualizaOperacao }/>

        <Comando acao={ props.calcular }/>
      </View>
  //   )
  // }}
)
export { Painel }
