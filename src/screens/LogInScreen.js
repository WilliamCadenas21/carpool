import React from 'react';
import {
  View, Image, StyleSheet, StatusBar, SafeAreaView,
  KeyboardAvoidingView,
  AsyncStorage, Alert,
  ActivityIndicator,
  Keyboard, TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../components';
import { userUpdate } from '../actions';

const urlMainLogo = require('../assets/images/main_logo.jpg');

class LogInScreen extends React.Component {
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

  //Implement Redux please 
  setInfo = async (res) => {
    try {
      const user = res.user;
      console.log(user);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      this.props.userUpdate(user);
    } catch (error) {
      Alert.alert('Advertencia',
        `ocurrió un error al cargar la información del usuario: ${error}`,
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
        this.setState(() => ({ charging: false }));
        if (res.success === true) {
          this.setInfo(res);
          this.props.navigation.navigate('App');
        } else {
          Alert.alert('Mensaje', res.message + '', [{ text: 'OK' }]);
        }
      })
      .catch(err => {
        this.setState(() => ({ charging: false }));
        Alert.alert('Mensaje',
          `Error en la conexión: ${err}`,
          [{ text: 'OK' }]);
      });
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
              style={styles.textInput}
              placeholder={'Email@uninorte.edu.co'}
              onChangeText={(email) => this.setState({ email })}
              keyboardType='email-address'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onSubmitEditing={() => this.refs.txtPassword.focus()}
            />

            <TextInput
              style={styles.textInput}
              placeholder={'Contraseña'}
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry
              autoCorrect={false}
              ref={'txtPassword'}
              onSubmitEditing={this.validate}
              id={'txtPassword'}
            />

            <Button
              onPress={this.validate}
              ParentStyle={{ backgroundColor: '#ECA228' }}
            >
              Iniciar Sesión
            </Button>

          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default connect(null, { userUpdate })(LogInScreen);

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
    borderRadius: 4,
  },
});
