import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchableWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView,
  AsyncStorage, ScrollView} from 'react-native';

const urlMainLogo = require('../assets/images/main-logo.png');

export default class SignIn2 extends React.Component {
  static navigationOptions = { title: 'Registro2'};
  
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
        <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior='padding' >
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}> 
              
              <View style={styles.logoContainer}>
                <Image source={urlMainLogo} 
                style={styles.logo}/>
              </View>

              <TextInput placeholder={'Nombres'} style={styles.textInput}
              returnKeyType='next'
              autoCorrect={false}
              onSubmitEditing={()=> this.refs.apellidos.focus()}/>

              <TextInput placeholder={'Apellidos'} style={styles.textInput}
              returnKeyType='next'
              autoCorrect={false}
              ref={"apellidos"}
              onSubmitEditing={()=> this.refs.txtEmail.focus()}/>

              <TextInput placeholder={'Email'} style={styles.textInput}
              keyboardType='email-address'
              returnKeyType='next'
              autoCorrect={false}
              ref={"txtEmail"}
              onSubmitEditing={()=> this.refs.txtPassword1.focus()}/>

              <TextInput placeholder={'Contraseña'} style={styles.textInput}
              returnKeyType='next'
              autoCorrect={false}
              ref={"txtPassword1"}
              onSubmitEditing={()=> this.refs.txtPassword2.focus()}/>

              <TextInput placeholder={'Confirmar contraseña'} style={styles.textInput}
              autoCorrect={false}
              ref={"txtPassword2"}/>

              <TouchableOpacity style={styles.button}
                onPress={this.login}>
                <Text style={styles.buttonText}>Registrase</Text>
              </TouchableOpacity>  

              <Text style={styles.footer}>Al crear una cuenta, aceptas nuestros 
              <Text Style={styles.terms} 
              onPress={() => this.props.navigation.navigate('Terms')}> terminos y condiciones</Text>
              </Text>

              <Text style={styles.footer}>¿Ya tienes una cuenta?
              <Text Style={styles.terms} 
              onPress={() => this.props.navigation.navigate('Log_in')}> Inicia sesión aquí</Text>
              </Text>
              
            </View>  
          </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>   
        </ScrollView>     
      </SafeAreaView>
    );
  }
  login = ()=>{
    alert('test');
  }
};

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column',
    justifyContent:'flex-end',
    paddingLeft:10,
    paddingRight:10,
  },
  logoContainer:{
    alignItems: 'center',
    marginBottom:0,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  textInput:{
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1,
    marginBottom:10,
    paddingHorizontal: 16,
  },
  button:{
    alignSelf: 'stretch',
    backgroundColor:"#237EE7", //naranja
    padding: 15,
    alignItems:'center',
  },
  buttonText:{
    textAlign: 'center',
    color:'white',
    fontSize:15,
  },
  footer:{
    color:'black',
    fontSize:13,
    opacity: 0.6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  terms:{
      textDecorationLine:'underline',
  },
});