import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export default class App extends Component {
  displayAlert = () => {
    alert("This is my alert only you can read this i can't read this")
  }
  render() {
    return(
      <View style={{marginTop : 200}}>
         <Button color="orange" title="Click me" onPress={this.displayAlert}/>
         <Text>My code </Text>
      </View>

    )
  }
}
