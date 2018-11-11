import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchableWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

const urlMainLogo = require('../assets/images/main-logo.png');

export default class Login extends React.Component {
  static navigationOptions = { title: 'Inicio de sesión'};
 
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback  style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container} >
              <View style={styles.logoContainer}>  
                <Image source={urlMainLogo} style={styles.logo}/>
              </View>

              <View style={styles.infoContainer}>
                  <TextInput placeholder={'Email'} 
                  style={styles.input}
                  keyboardType='email-address'
                  returnKeyType='go'
                  autoCorrect={false}
                  onSubmitEditing={()=> this.refs.txtPassword.focus()}
                  />

                  <TextInput placeholder={'Enter password'} 
                  style={styles.input}
                  returnKeyType='go'
                  secureTextEntry={true}
                  autoCorrect={false}
                  ref={"txtPassword"}
                  /> 
                  <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                  </TouchableOpacity>  
              </View>
            </View>
          </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>      
      </SafeAreaView>
    );
  }
};


const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column',
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  infoContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 230,
    padding: 20,
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1,
    marginBottom:20,
    paddingHorizontal: 10,
  },
  button1:{
    backgroundColor:"#237EE7", //naranja
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color:'white',
    fontSize:15
  },
});
