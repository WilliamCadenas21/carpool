import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchableWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

const urlMainLogo = require('../assets/images/main-logo.png');

//
export default class SignIn extends React.Component {
  static navigationOptions = { title: 'Registro'};
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white'/>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback  style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>  
              <View style={styles.logoContainer}>
                <Image source={urlMainLogo} 
                style={styles.logo}/>
              </View>

              <View style={styles.infoContainer}>
                <View style={styles.infoPosition}>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}
                  onSubmitEditing={()=> this.refs.txtEmail.focus()}/>
                  <TextInput placeholder={'Email'} style={styles.input}
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoCorrect={false}
                  ref={"txtEmail"}
                  onSubmitEditing={()=> this.refs.txtPassword1.focus()}/>
                  <TextInput placeholder={'Contraseña'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}
                  ref={"txtPassword1"}
                  onSubmitEditing={()=> this.refs.txtPassword2.focus()}/>
                  <TextInput placeholder={'Confirmar contraseña'} style={styles.input}
                  autoCorrect={false}
                  ref={"txtPassword2"}/>
                  <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Registrase</Text>
                  </TouchableOpacity>  
                  <Text style={styles.footer}>Al crear una cuenta, aceptas nuestros 
                  <Text Style={styles.terms} onPress={() => this.props.navigation.navigate('Terms')}> terminos y condiciones</Text>
                  </Text>
                  <Text style={styles.footer}>¿Ya tienes una cuenta?
                  <Text Style={styles.terms} onPress={() => this.props.navigation.navigate('Login')}> Inicia sesión aquí</Text>
                  </Text>
                </View> 
              </View>
            </View>  
          </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>        
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
   container:{
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  logoContainer:{
    alignItems: 'center',
    flex: 1
  },
  infoContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    padding:20,
  },
  input:{
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1,
    paddingHorizontal: 10,
    marginBottom:20,
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
  footer:{
    color:'black',
    fontSize:13,
    opacity: 0.6,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  terms:{
      textDecorationLine:'underline'
  },
});