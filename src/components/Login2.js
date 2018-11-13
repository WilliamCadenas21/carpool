import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchableWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView,
  AsyncStorage} from 'react-native';

const urlMainLogo = require('../assets/images/main-logo.png');

export default class Login2 extends React.Component {
  static navigationOptions = { title: 'Inicio de sesión2'};
   
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

              <TextInput placeholder={'Email'} 
              style={styles.textInput}
              onChangeText={(email)=> this.setState({email})}
              keyboardType='email-address'
              returnKeyType='go'
              autoCorrect={false}
              onSubmitEditing={()=> this.refs.txtPassword.focus()}
              />

              <TextInput placeholder={'Contraseña'} 
              style={styles.textInput}
              onChangeText={(password)=> this.setState({password})}
              returnKeyType='go'
              secureTextEntry={true}
              autoCorrect={false}
              ref={"txtPassword"}
              /> 

              <TouchableOpacity style={styles.button}
                onPress={this.login}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity> 

            </View>
          </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>      
      </SafeAreaView>
    );
  }

  login = ()=>{
    
    fetch('')

  }
};


const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:60,
  },
  logo: {
    width: 250,
    height: 90,
    resizeMode: 'contain',
    marginBottom:0,
  },
  textInput:{
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1,
    marginBottom:10,
    paddingLeft: 16,
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
});