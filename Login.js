import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput,
  TouchbleWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, ToachbleOpacity, KeyboardAvoidingView 
} from 'react-native';

export default class Login extends React.Component {
   static navigationOptions = { header: null};
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' 
        style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('./main-logo.png')} 
            style={styles.logo}/>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoPosition}>
              <TextInput style={styles.input}/>
              <TextInput style={styles.input}/>
            </View>
          </View>
        </KeyboardAvoidingView>     
      </SafeAreaView>
    );
  }

};

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column'
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  infoContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding:20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  input:{
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1
  },
  infoPosition:{
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex:1
  }
});

