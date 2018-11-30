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

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    <Text style={styles.name}>{this.props.names} {this.props.lastNames}</Text>   
                    <Image 
                    style={styles.profilepic} 
                    source={image} 
                    />  
                    <Text style={styles.text}>{this.props.direccion}</Text>
                    <Text style={styles.text}>{this.props.barrio}</Text>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        width: null,
        alignSelf: 'stretch',
        borderColor: '#8fbbfc',
        borderWidth: 0,
        height: 250,
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
        borderColor: '#ECA228',
        marginBottom: 5,
        borderWidth: 5,
    },
    name: {
        marginTop: 10,
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
        marginBottom: 5,
    }
});
