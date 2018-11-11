import React from 'react';
import { Button, View, TextInput, Text, StyleSheet,StatusBar,SafeAreaView, 
  ScrollView} from 'react-native';

const urlMainLogo = require('../assets/images/main-logo.png');

export default class Test extends React.Component {
  static navigationOptions = { title: 'Test'};
  render(){
    return(
      <ScrollView>
      <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
                  <TextInput placeholder={'Nombre completo'} style={styles.input}
                  returnKeyType='next'
                  autoCorrect={false}/>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  input:{
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1,
    paddingHorizontal: 10,
    marginBottom:20,
  }
});
