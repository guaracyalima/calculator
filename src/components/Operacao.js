import React, { Component } from 'react'
import { Picker, StyleSheet } from 'react-native'

export default class Operacao extends Component{

  render(){
    // onValueChange = pega o valor da alteracao
    //selectedValue = funciona como se fosse o ng-model do angular
    //ou seja dis qual valor essa propriedade vai assumir
    return(
        <Picker
                style={ css.operacao }
                selectedValue={ this.props.operacao }
                onValueChange={ op => this.props.atualizaOperacao(op) }>
          <Picker.Item label='Soma' value='soma'/>
          <Picker.Item label='Subtração' value='subtracao'/>
        </Picker>
    )
  }
}

//
// export default props => (
//   <Picker style={ css.operacao }>
//     <Picker.Item label='Soma' value='soma'/>
//     <Picker.Item label='Subtração' value='subtracao'/>
//   </Picker>
// )

const css = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
})
