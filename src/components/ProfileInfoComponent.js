import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage,
    StatusBar
} from 'react-native';

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: '',
            lastNames: '',
        };
        this.loadInfo();
    }

    loadInfo = async () => {
        const names = await AsyncStorage.getItem('names');
        const lastNames = await AsyncStorage.getItem('lastNames');
        this.setState(previousState => ({names: names}));
        this.setState(previousState => ({lastNames: lastNames}));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white'/>
                <Text>better done than perfect by {this.state.names} {this.state.lastNames}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
    }
});