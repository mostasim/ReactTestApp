import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Billah!!</Text>npm install appcenter appcenter-analytics appcenter-crashes --save-exact
        <Image source={pic} style={{ width: 200, height: 110 }} />
        <Greeting name="Billah !!!" />
        <Greeting name="Billah !!!" />
      </View>

    );
  }
}
class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
