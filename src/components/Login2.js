import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchableWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView,
  AsyncStorage, ScrollView,
} from 'react-native';

const urlMainLogo = require('../assets/images/main_logo.jpg');

export default class Login2 extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
  };
   
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
    }
  }

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'william');
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>

        <KeyboardAvoidingView behavior='padding' style={styles.flex}>
          <TouchableWithoutFeedback  style={styles.flex} onPress={Keyboard.dismiss}>
            <View style={styles.container} >

              <View style={styles.logoContainer}>  
                <Image source={urlMainLogo} style={styles.logo}/>
              </View>

              <TextInput placeholder={'Email@uninorte.edu.co'} 
              style={styles.textInput}
              onChangeText={(email)=> this.setState({email})}
              keyboardType='email-address'
              returnKeyType='go'
              autoCapitalize= 'none'
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
  if(!this.state.email || !this.state.password){
    alert('nigun campo puede estar vacio');
  }else{
    alert('por favor espere...');
    strEmail = this.state.email.split('@');
    if(strEmail[1]=='uninorte.edu.co'){
      fetch('https://carpool-back.herokuapp.com/users/login',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          email_id: this.state.email,
          password: this.state.password
        })
      })
      .then( response => response.json())
      .then( res =>{
        if(res.success === true){ 
          alert('bienvenido');
          this.signIn();
          this.props.navigation.navigate('App');
        }else{
          alert(res.message);
        }
      })
      .done();
    }else{
      alert('su correo electronico debe pertenecer al dominio @uninorte.edu.co');
    }
  }
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
  flex:{
    flex: 1,
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
  },
  textInput:{
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1,
    marginBottom:10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  button:{
    alignSelf: 'stretch',
    backgroundColor:"#237EE7", //naranja
    padding: 15,
    alignItems:'center',
    borderRadius: 20,
  },
  buttonText:{
    textAlign: 'center',
    color:'white',
    fontSize:18,
  },
});