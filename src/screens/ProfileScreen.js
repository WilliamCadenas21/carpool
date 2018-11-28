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
import ProfileHeaderComponent from '../components/ProfileHeaderComponent';
import ProfileInfoComponent from '../components/ProfileInfoComponent';

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
        this.setState(() => ({ names: names }));
        this.setState(() => ({ lastNames: lastNames }));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white'/>
                <ProfileHeaderComponent />
                <ProfileInfoComponent />
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