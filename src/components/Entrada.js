import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Numero from './Numero'

export default props => (
  <View style={ css.numeros }>
    <Numero
            num={ props.num1 }
            atualizaValor={ props.atualizaValor }
            nome='num1'/>

    <Numero
            num={ props.num2 }
            atualizaValor={ props.atualizaValor }
            nome='num2'/>
  </View>
)

const css = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
