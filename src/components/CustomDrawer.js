import {
  DrawerItems,
} from 'react-navigation';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Body,
} from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../components';

const CustomDrawer = ({ user, ownProps, mode }) => {
  const { rider } = mode;
  const color = rider ? '#237EE7' : '#ECA228';
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
            onPress={() => this.props.navigation.navigate('Sign_in')}
          >
            Registrarse
          </Button>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const user = state.userInfo;
  const mode = state.userMode;
  return { user, ownProps, mode };
};

export default connect(mapStateToProps)(CustomDrawer);

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
