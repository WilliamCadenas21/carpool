import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

//const urlMainLogo = require('../assets/images/main_logo.jpg');

export default class Test extends React.Component {
  static navigationOptions = { title: 'Test'};
  render(){
    return(
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
};
