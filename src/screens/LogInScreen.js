import React from 'react';
import {
  View, Text, Image, StyleSheet, TextInput
  , StatusBar, SafeAreaView,
  TouchableOpacity, KeyboardAvoidingView,
  AsyncStorage, Alert,
  ActivityIndicator,
  Keyboard
} from 'react-native';

const urlMainLogo = require('../assets/images/main_logo.jpg');

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      charging: false,
    };
  }

  setInfo = async (res) => {
    try {
      await AsyncStorage.setItem('userToken', 'william');
      await AsyncStorage.setItem('names', res.names);
      await AsyncStorage.setItem('lastNames', res.lastNames);
      await AsyncStorage.setItem('email', res.email);
      await AsyncStorage.setItem('semestre', res.semestre.toString());
      await AsyncStorage.setItem('age', res.age.toString());
      await AsyncStorage.setItem('carrera', res.carrera);
      await AsyncStorage.setItem('direccion', res.direccion);
      await AsyncStorage.setItem('barrio', res.barrio);
      await AsyncStorage.setItem('placa', res.placa + '');
    } catch (error) {
      Alert.alert('Advertencia',
        'ocurrió un error al cargar la información del usuario',
        [{ text: 'OK' }]);
    }
  }

  validate = () => {
    Keyboard.dismiss();
    if (!this.state.email || !this.state.password) {
      Alert.alert('Advertencia', 'ningún campo puede estar vacío', [{ text: 'OK' }]);
    } else {
      const strEmail = this.state.email.split('@');
      if (!(strEmail[1] === 'uninorte.edu.co')) {
        Alert.alert('Advertencia',
          'su correo electronico debe pertenecer al dominio @uninorte.edu.co',
          [{ text: 'OK' }]);
      } else {
        this.logIn();
      }
    }
  }

  logIn = () => {

    this.setState(() => ({ charging: true }));
    fetch('https://carpool-back.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_id: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          this.setState(() => ({ charging: false }));
          this.setInfo(res);
          this.props.navigation.navigate('App');
        } else {
          this.setState(() => ({ charging: false }));
          Alert.alert('Mensaje', res.message + '', [{ text: 'OK' }]);
        }
      })
      .done();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <KeyboardAvoidingView behavior='padding'>
          <View>
            <View style={styles.logoContainer}>
              <Image source={urlMainLogo} style={styles.logo} />
            </View>

            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              {this.state.charging && <ActivityIndicator />}
            </View>

            <TextInput
              placeholder={'Email@uninorte.edu.co'}
              style={styles.textInput}
              onChangeText={(email) => this.setState({ email })}
              keyboardType='email-address'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onSubmitEditing={() => this.refs.txtPassword.focus()}
            />

            <TextInput
              placeholder={'Contraseña'}
              style={styles.textInput}
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}
              autoCorrect={false}
              ref={'txtPassword'}
              onSubmitEditing={this.validate}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.validate}
            >
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  flex: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 250,
    height: 90,
    resizeMode: 'contain',
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#ECA228', //naranja
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});
