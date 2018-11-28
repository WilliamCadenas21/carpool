import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage,
    StatusBar,
    Image
} from 'react-native';

const image = require('../assets/images/userImage.jpg');

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
        const namesStorage = await AsyncStorage.getItem('names');
        const lastNamesStorage = await AsyncStorage.getItem('lastNames');
        this.setState(() => ({ names: namesStorage }));
        this.setState(() => ({ lastNames: lastNamesStorage }));
    }

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    <Text style={styles.name}>{this.state.names} {this.state.lastNames}</Text>   
                    <Image 
                    style={styles.profilepic} 
                    source={image} 
                    />  
                    <Text style={styles.text}>direccion</Text>
                    <Text style={styles.text}>-barrio-</Text>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderColor: '#8fbbfc',
        borderWidth: 3,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3ebf7',
    },
    profilepic: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'blue',
    },
    name: {
        marginTop: 0,
        marginBottom: 5,
        fontSize: 16,
        color: 'black',
    },
    text: {
        fontSize: 14,
        color: 'black',
        fontWeight: '300',
        fontStyle: 'italic',
        opacity: 0.4,
    }
});
