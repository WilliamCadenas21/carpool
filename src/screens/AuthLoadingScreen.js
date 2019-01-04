import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage,
    Image,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { userUpdate } from '../actions';

const urlMainLogo = require('../assets/images/main_logo.jpg');

class AuthLoadingScreen extends Component {

    componentWillMount() {
        this.loadApp();
    }

    loadApp = async () => {
        try {
            const json = await AsyncStorage.getItem('user');
            const user = JSON.parse(json);
            this.props.userUpdate(user);
            this.props.navigation.navigate(user.token ? 'App' : 'Auth');
        } catch (error) {
            console.log('empty info');
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

export default connect(null, { userUpdate })(AuthLoadingScreen);

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
