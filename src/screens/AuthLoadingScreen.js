import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage,
    Image,
    StatusBar
} from 'react-native';

const urlMainLogo = require('../assets/images/main_logo.jpg');

class AuthLoadingScreen extends Component {

    constructor() {
        super();
        this.loadApp();
    }

    loadApp = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            this.props.navigation.navigate(token ? 'App' : 'Auth');
        } catch (error) {
            this.props.navigation.navigate('Auth');
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.logoContainer}>
                    <Image
                        source={urlMainLogo}
                        style={styles.logo}
                    />
                </View>
                <ActivityIndicator />
            </View>
        );
    }
}
export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
    },
    logo: {
        width: 250,
        height: 90,
        resizeMode: 'contain',
    },
});
