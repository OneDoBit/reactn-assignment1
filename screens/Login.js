import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Audio, Video } from 'expo-av';

export default class LoginScreen extends Component {

  state = { user: '', pass: undefined } // initialize our default state values...try some different default values: '', 3, undefined, null

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={
            // { uri: "url here" }
            require('../assets/earth.mp4') 
          }
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 200, height: 200, marginVertical: 40 }}
        />

        <Text>
        {
          // converts a object into a easily readable json string
          JSON.stringify(this.state, null, 2)
        }
        </Text>

        <TextInput 
        onChangeText={
          // update the user states value
          text => this.setState({user: text})
        }
        style={styles.input}
        placeholder="username"></TextInput>

        <TextInput 
        onChangeText={
          text => this.setState({pass: text})
        } 
        style={styles.input} 
        placeholder="password" 
        secureTextEntry={true} // hide text
        ></TextInput>

        <View style={styles.container2}>
          <Button 
            onPress={
              // Navigate to the App Navigation Stack Next
              () => this.props.navigation.navigate('App')
            }
            style={styles.h1} 
            title="Login"
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: -100,
    alignItems: 'center'
  },
  container2: {
    marginTop: 50
  },
  h1: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'gray',
    marginBottom: 20,
    padding: 10,
    width: '100%'
  }
});