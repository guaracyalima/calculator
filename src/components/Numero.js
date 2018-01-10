import React from 'react'
import { TextInput, StyleSheet }  from 'react-native'

//onchangeText pega a alteracaode conteudo
export default props => (
  <TextInput
              style={ estilo.numero }
              value={ props.num }
              onChangeText={ valorDoCampo => props.atualizaValor(props.nome, valorDoCampo) }/>
)

const estilo = StyleSheet.create({
  numero: {
    width: 180,
    height: 80,
    fontSize: 20,
    borderBottomColor: '#000'
  }
})
