import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage,
    TouchableOpacity,
    StatusBar
} from "react-native";

import {Icon, Header, Left, Right} from 'native-base';

export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white'/>
                <Text>better done than perfect by Mauricio Pertuz</Text>
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