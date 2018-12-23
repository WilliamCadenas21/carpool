import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import { UserPhoto } from '../components';

class ProfileHeader extends Component {

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    <Text style={styles.name}>{this.props.names} {this.props.lastNames}</Text>
                    
                    <Text style={styles.text}>{this.props.address}</Text>
                    <Text style={styles.text}>{this.props.neighborhood}</Text>
                </View>
            </View>
        );
    }
}

export { ProfileHeader };

const styles = StyleSheet.create({
    headerBackground: {
        width: null,
        alignSelf: 'stretch',
        borderColor: '#8fbbfc',
        borderWidth: 0,
        height: 250,
    },
    row: {
        flex: 1,
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
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
