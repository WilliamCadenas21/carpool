import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchableWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView,
  AsyncStorage, ScrollView} from 'react-native';

const urlMainLogo = require('../assets/images/main_logo.jpg');

export default class SignIn2 extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      names:'',
      lastNames:'',
      email:'',
      password1:'',
      password2:'',
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
      <SafeAreaView style={styles.container} >
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
        <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior='padding' >
          <TouchableWithoutFeedback  style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}> 
              
              <View style={styles.logoContainer}>
                <Image source={urlMainLogo} 
                style={styles.logo}/>
              </View>

              <TextInput placeholder={'Nombres'} style={styles.textInput}
                onChangeText={(names)=> this.setState({names})}
                returnKeyType='next'
                autoCorrect={false}
                onSubmitEditing={()=> this.refs.txtApellidos.focus()}
              />

              <TextInput placeholder={'Apellidos'} style={styles.textInput}
                onChangeText={(lastNames)=> this.setState({lastNames})}
                returnKeyType='next'
                autoCorrect={false}
                ref={"txtApellidos"}
                onSubmitEditing={()=> this.refs.txtEmail.focus()}
              />

              <TextInput placeholder={'Email@uninorte.edu.co'} style={styles.textInput}
                onChangeText={(email)=> this.setState({email})}
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
                autoCapitalize= 'none'
                ref={"txtEmail"}
                onSubmitEditing={()=> this.refs.txtPassword1.focus()}
              />

              <TextInput placeholder={'Contraseña'} style={styles.textInput}
                onChangeText={(password1)=> this.setState({password1})}
                returnKeyType='next'
                autoCorrect={false}
                ref={"txtPassword1"}
                secureTextEntry={true}
                onSubmitEditing={()=> this.refs.txtPassword2.focus()}
              />

              <TextInput placeholder={'Confirmar contraseña'} style={styles.textInput}
                onChangeText={(password2)=> this.setState({password2})}
                autoCorrect={false}
                secureTextEntry={true}
                ref={"txtPassword2"}
              />

              <TouchableOpacity style={styles.button}
                onPress={this.login}
                >
                <Text style={styles.buttonText}>Registrase</Text>
              </TouchableOpacity>  

              <Text style={styles.footer}>Al crear una cuenta, aceptas nuestros 
                <Text Style={styles.terms} 
                onPress={() => this.props.navigation.navigate('Terms')}> terminos y condiciones
                </Text>
              </Text>

              <Text style={styles.footer}>¿Ya tienes una cuenta?
                <Text Style={styles.terms} 
                  onPress={() => this.props.navigation.navigate('Log_in')}> Inicia sesión aquí
                </Text>
              </Text>
              
            </View>  
         </TouchableWithoutFeedback>
        </KeyboardAvoidingView>   
        </ScrollView>     
      </SafeAreaView>
    );
  }
  login = ()=>{
    

    strEmail = this.state.email.split('@');
    if(strEmail[1]=='uninorte.edu.co'){
      if(this.state.password1 == this.state.password2){
        alert('por favor espere...');
        fetch('https://carpool-back.herokuapp.com/users/create',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            nombres: this.state.names,
            apellidos: this.state.lastNames,
            email_id: this.state.email,
            contraseña: this.state.password1 
          })
        })
        .then( response => response.json())
        .then( res =>{
          if(res.success === true){ 
            alert('El registro ha sido exitoso, ahora es momento de ir a su correo uninorte y validar su cuenta Carpool');
            this.props.navigation.navigate('Home');
          }else{
            alert(res.message);
          }
        })
        .done();
      }else{
        alert('la contraseñas no son iguales, por favor intentelo de nuevo'); 
      }
    }else{
      alert('su correo electronico debe pertenecer al dominio @uninorte.edu.co');
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
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  button:{
    alignSelf: 'stretch',
    backgroundColor:"#237EE7", //naranja
    padding: 15,
    alignItems:'center',
    borderRadius: 15,
  },
  buttonText:{
    textAlign: 'center',
    color:'white',
    fontSize:18,
  },
  footer:{
    color:'black',
    fontSize:13,
    opacity: 0.4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  terms:{
      textDecorationLine:'underline',
  },
});