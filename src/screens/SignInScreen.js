import React from 'react';
import {
  View, Text, Image, StyleSheet, TextInput,
  StatusBar, SafeAreaView,
  ScrollView, Alert, ActivityIndicator,
  Keyboard
} from 'react-native';
import { Button } from '../components';

const urlMainLogo = require('../assets/images/main_logo.jpg');

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      names: '',
      lastNames: '',
      email: '',
      password1: '',
      password2: '',
      charging: false,
    };
  }

  validate = () => {
    Keyboard.dismiss();
    if (!this.state.email || !this.state.password1 || !this.state.password2
      || !this.state.names || !this.state.lastNames) {
      Alert.alert('Advertencia', 'ningún campo puede estar vacío', [{ text: 'OK' }]);
    } else {
      const strEmail = this.state.email.split('@');
      if (strEmail[1] !== 'uninorte.edu.co') {
        Alert.alert('Advertencia',
          'su correo electronico debe pertenecer al dominio @uninorte.edu.co',
          [{ text: 'OK' }]);
      } else if (this.state.password1 !== this.state.password2) {
        Alert.alert('Advertencia',
          'la contraseñas no son iguales, por favor intentalo de nuevo',
          [{ text: 'OK' }]);
        this.setState(() => ({ password1: '' }));
        this.setState(() => ({ password2: '' }));
      } else {
        this.singIn();
      }
    }
  }

  singIn = () => {
    this.setState(() => ({ charging: true }));
    fetch('https://carpool-back.herokuapp.com/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombres: this.state.names,
        apellidos: this.state.lastNames,
        email_id: this.state.email,
        contraseña: this.state.password1
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          this.setState(() => ({ charging: false }));
          Alert.alert('Mensaje',
            'Registro exitoso, valide su correo para poder ingresar',
            [{ text: 'OK' }]);
          this.props.navigation.navigate('Home');
        } else {
          this.setState(() => ({ charging: false }));
          Alert.alert('Mensaje',
            res.message,
            [{ text: 'OK' }]);
        }
      })
      .catch(err => {
        this.setState(() => ({ charging: false }));
        Alert.alert('Mensaje',
          `Error en la conección: ${err}`,
          [{ text: 'OK' }]);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <ScrollView keyboardShouldPersistTaps='always'>
          <View style={styles.innerContainer}>

            <View style={styles.logoContainer}>
              <Image
                source={urlMainLogo}
                style={styles.logo}
              />
            </View>

            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              {this.state.charging && <ActivityIndicator />}
            </View>

            <TextInput
              placeholder={'Nombres'} style={styles.textInput}
              onChangeText={(names) => this.setState({ names })}
              returnKeyType='next'
              autoCorrect={false}
              onSubmitEditing={() => this.refs.txtApellidos.focus()}
            />

            <TextInput
              placeholder={'Apellidos'} style={styles.textInput}
              onChangeText={(lastNames) => this.setState({ lastNames })}
              returnKeyType='next'
              autoCorrect={false}
              ref={'txtApellidos'}
              onSubmitEditing={() => this.refs.txtEmail.focus()}
            />

            <TextInput
              placeholder={'Email@uninorte.edu.co'} style={styles.textInput}
              onChangeText={(email) => this.setState({ email })}
              keyboardType='email-address'
              returnKeyType='next'
              autoCorrect={false}
              autoCapitalize='none'
              ref={'txtEmail'}
              onSubmitEditing={() => this.refs.txtPassword1.focus()}
            />

            <TextInput
              placeholder={'Contraseña'} style={styles.textInput}
              onChangeText={(password1) => this.setState({ password1 })}
              returnKeyType='next'
              autoCorrect={false}
              value={this.state.password1}
              ref={'txtPassword1'}
              secureTextEntry
              onSubmitEditing={() => this.refs.txtPassword2.focus()}
            />

            <TextInput
              placeholder={'Confirmar contraseña'} style={styles.textInput}
              onChangeText={(password2) => this.setState({ password2 })}
              autoCorrect={false}
              secureTextEntry
              value={this.state.password2}
              ref={'txtPassword2'}
              onSubmitEditing={this.validate}
            />
            <Button
              onPress={this.validate}
            >
              Registrase
            </Button>

            <Text style={styles.footer}>Al crear una cuenta, aceptas nuestros
              <Text
                style={styles.terms}
                onPress={() => this.props.navigation.navigate('Terms')}
              >
                términos y condiciones
              </Text>
            </Text>

            <Text style={styles.footer}>¿Ya tienes una cuenta?
              <Text
                style={styles.terms}
                onPress={() => this.props.navigation.navigate('Log_in')}
              >
                Inicia sesión aquí
              </Text>
            </Text>

          </View>
        </ScrollView>
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
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 250,
    height: 150,
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
    borderRadius: 4,
  },
  footer: {
    color: 'black',
    fontSize: 13,
    opacity: 0.4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  terms: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
