import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage,
    Image
} from 'react-native';

const urlMainLogo = require('../assets/images/main_logo.jpg');

class AuthLoadingScreen extends Component {

    constructor() {
        super();
        this.loadApp();
    }

    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    render() {
        return (
            <View style={styles.container}>
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
