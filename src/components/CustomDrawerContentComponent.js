import { createSwitchNavigator, 
    createStackNavigator, 
    createDrawerNavigator,
    DrawerItems, 
} from 'react-navigation'

import { 
    View, 
    TouchableOpacity,
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
} from 'native-base'
import React from 'react';

const CustomDrawerContentComponent = (props) => (
    <Container>
      <SafeAreaView style={styles.safeArea}>
        <Header style={styles.drawerHeader}>
          <Body>
          <Text>Aqui va el nombre</Text>
          </Body>
        </Header>
  
        <Content>   
          <StatusBar barStyle='dark-content' backgroundColor='white'/>
          <DrawerItems {...props} />
        </Content>
      </SafeAreaView>
    </Container>
);

export default CustomDrawerContentComponent;


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