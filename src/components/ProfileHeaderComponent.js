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
        const names = await AsyncStorage.getItem('names');
        const lastNames = await AsyncStorage.getItem('lastNames');
        this.setState(() => ({ names: names }));
        this.setState(() => ({ lastNames: lastNames }));
    }

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    <Text style={styles.name}>{this.state.names} {this.state.lastNames}</Text>
                    <View style={styles.profilepicWrap}>
                        <Image 
                        style={styles.profilepic} 
                        source={image} 
                        />  
                    </View>
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
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    profilepicwrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'blue',
        borferwidth: 16
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: 'blue',
        borferwidth: 4
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: 'black',
        fontWeight: '300',
        fontStyle: 'italic'
    }
});
