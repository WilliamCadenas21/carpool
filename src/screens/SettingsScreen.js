import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    AsyncStorage,
    StatusBar
} from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = { title: 'Cerrar Sesión' } ;
    
    signOut = async () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white'/>
                <Button title="Sign Out" onPress={this.signOut} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});