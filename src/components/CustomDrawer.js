import React, { Component } from 'react';
import {
  DrawerItems,
} from 'react-navigation';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  AsyncStorage
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Body,
} from 'native-base';

import { connect } from 'react-redux';
import { Button } from '../components';
import { driverMode, riderMode } from '../actions/UserModeActions';

class CustomDrawer extends Component {

  signOut = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  };

  changeMode = () => {
    if (this.props.mode.rider) {
      this.props.driverMode();
    } else {
      this.props.riderMode();
    }
  };

  render() {
    const { user, ownProps, mode } = this.props;
    const { rider, color } = mode;
    return (
      <Container>
        <SafeAreaView style={styles.safeArea}>

          <Header style={[styles.drawerHeader, { backgroundColor: color }]}>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <Body>
              <Text style={styles.text} >{user.names} {user.lastNames}</Text>
              <Text style={[styles.text, { fontSize: 12 }]} >{user.email}</Text>
            </Body>
          </Header>

          <Content>
            <DrawerItems {...ownProps} />
            <Button
              ParentStyle={{ backgroundColor: color }}
              onPress={this.changeMode}
            >
              {rider ? 'Modo Conductor' : 'Modo Pasajero'}
            </Button>

          </Content>

          <Button
            ParentStyle={{ backgroundColor: 'red' }}
            onPress={this.signOut}
          >
            Cerrar Sesión
          </Button>
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.userInfo;
  const mode = state.userMode;
  return { user, ownProps, mode };
};

export default connect(mapStateToProps, { riderMode, driverMode })(CustomDrawer);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 50,
  },
});
