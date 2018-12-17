import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';

const image = require('../assets/images/userImage.jpg');

class ProfileHeader extends Component {

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    <View style={styles.row}>
                    
                        <TouchableOpacity
                            style={styles.create}
                            onPress={() => this.props.navigation.navigate('Edit')}
                        >
                            <Icon name="create" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{this.props.names} {this.props.lastNames}</Text>
                    <View style={styles.profilePicWrapper}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.profilePic}
                                        source={image}
                                    />
                                </TouchableOpacity>
                            </View>
                    <Text style={styles.text}>{this.props.direccion}</Text>
                    <Text style={styles.text}>{this.props.barrio}</Text>
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
    create: {
        paddingBottom: 40,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        marginHorizontal: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3ebf7',
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: '#ECA228',
        borderWidth: 2,
    },
    profilePicWrapper: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: '#237EE7',
        marginBottom: 5,
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
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