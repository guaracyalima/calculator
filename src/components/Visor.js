import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

// export default class  Visor extends Component{
//
//   constructor(props){
//     super(props)
//
//     this.state = { resultado: '' }
//
//   }
//
//   render(){
//     return(
//       <View>
//         <TextInput
//                   placeholder='Resultado'
//                   value={ this.state.resultado }
//                   style={ css.visor }/>
//       </View>
//     )
//   }
// }

export default props => (
    <View>
      <TextInput
                placeholder='Resultado'
                editable={ false}
                style={ css.visor }
                value={ props.resultado }/>
    </View>
)

const css = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30
  }
})
