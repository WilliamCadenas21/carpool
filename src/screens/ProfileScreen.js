import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

import { ProfileHeader, ProfileInfo, Button } from '../components';

class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTransparent: true,
        headerRight: (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('Edit')}
            >
                <Icon name="create" />
            </TouchableOpacity>
        )
    });
    render() {
        const {
            names,
            lastNames,
            email,
            age,
            address,
            neighborhood,
            degree,
            semester
        } = this.props.user;

        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ProfileHeader
                    navigation={this.props.navigation}
                    names={names}
                    lastNames={lastNames}
                    address={address}
                    neighborhood={neighborhood}
                />
                <ProfileInfo
                    names={names}
                    lastNames={lastNames}
                    address={address}
                    neighborhood={neighborhood}
                    email={email}
                    degree={degree}
                    semester={semester}
                    age={age}
                />
                <View style={styles.footer}>
                    <Button
                        ParentStyle={styles.button2}
                        ParentTextStyle={{ fontSize: 14 }}
                    >
                        Agregar Horario
                        </Button>
                    <Button
                        ParentStyle={styles.button2}
                        ParentTextStyle={{ fontSize: 14 }}
                    >
                        Agregar Ubicación
                        </Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.userInfo });

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
    footer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    button2: {
        backgroundColor: '#237EE7', //naranja
        padding: 15,
        alignItems: 'center',
        borderRadius: 4,
        height: 50,
    },
});
