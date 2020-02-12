import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Navigator from './Navigation/Routes/homeStack'
import Signup from './SignUp/SignUp'
//import Doctor from './SignUp/Doctor'


export default class App extends Component {
  render() {
    return (
      <View >
          <Navigator />
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
