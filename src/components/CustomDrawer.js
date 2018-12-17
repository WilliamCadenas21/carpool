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

const CustomDrawer = (props) => (
  <Container>
    <SafeAreaView style={styles.safeArea}>
      <Header style={styles.drawerHeader}>
        <Body>
          <Text>Aquí va el nombre</Text>
        </Body>
      </Header>

      <Content>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <DrawerItems {...props} />
      </Content>
    </SafeAreaView>
  </Container>
);

export { CustomDrawer };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 50,
    backgroundColor: '#ECA228'
  },
});