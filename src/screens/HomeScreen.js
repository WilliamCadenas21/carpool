import React from 'react';
import {
  View, Image, StyleSheet,
  StatusBar, SafeAreaView
} from 'react-native';
import { Button } from '../components';

const urlMainLogo = require('../assets/images/main_logo.jpg');

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Home1', header: null };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar barStyle='dark-content' backgroundColor='white' />

          <View style={styles.logoContainer}>
            <Image source={urlMainLogo} style={styles.logo} />
          </View>

          <Button
            onPress={() => this.props.navigation.navigate('Log_in')}
            ParentStyle={{ backgroundColor: '#ECA228' }}
          >
            Iniciar Sesión
          </Button>

          <Button
            onPress={() => this.props.navigation.navigate('Sign_in')}
          >
            Registrarse
          </Button>

        </View>
      </SafeAreaView>
    );
  }
}

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 0,
  }
});

