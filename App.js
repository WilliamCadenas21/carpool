import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Login from './Login';


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null};
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Image source={require('./main-logo.png')} style={styles.logo} />
        </View>

        <View style={styles.subtitle}>
          <View style={styles.titleWrapperRow}>
              <Button
              color="#ECA228"
              title="Iniciar Sesión"
              onPress={() => this.props.navigation.navigate('Log_in')}
              />
              <Button
              color="#237EE7"
              title="Registrase"
              onPress={() => this.props.navigation.navigate('Sign_in')}
              />
          </View>
        </View> 
        
      </View>
    );
  }
}

class SingInScreen extends React.Component {
  static navigationOptions = { header: null};
  render() {
    return (
      <View style={styles.wrapper}>
        
        <Text>Details Screen</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'white', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleCar:{
    color: '#ECA228', //orange
    fontSize: 35,
    fontWeight: 'bold'
  },
  titlePool:{
    color: '#237EE7', // blue
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle:{
    color:'black',
    fontSize: 20,
    paddingBottom: 20,

  },
  titleWrapper:{
    justifyContent: 'center',
    flex:1
  },
  titleWrapperRow:{
    flexDirection: 'row',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  }
});

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sign_in: {
      screen: SingInScreen,
    },
    Log_in:{
      screen: Login,
    }
  },
  {
    initialRouteName: 'Home',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}