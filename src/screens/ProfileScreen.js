import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    AsyncStorage,
    StatusBar,
    Alert,
} from 'react-native';

import { ProfileHeader, ProfileInfo, Button } from '../components';

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: '',
            lastNames: '',
            direccion: '',
            barrio: '',
            email: '',
            carrera: '',
            semestre: '',
            age: ''
        };
    }

    componentWillMount() {
        this.loadInfo();
    }

    loadInfo = async () => {
        try {
            const json = await AsyncStorage.getItem('user');
            const user = JSON.parse(json);
            console.log(user);
            this.setState(() => ({ names: user.names }));
            this.setState(() => ({ lastNames: user.lastNames }));
            this.setState(() => ({ direccion: user.direccion }));
            this.setState(() => ({ barrio: user.barrio }));
            this.setState(() => ({ email: user.email }));
            this.setState(() => ({ carrera: user.carrera }));
            this.setState(() => ({ semestre: user.semestre }));
            this.setState(() => ({ age: user.age }));
        } catch (error) {
            Alert.alert('Advertencia',
            `error: ${error}`,
            [{ text: 'OK' }]);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ProfileHeader
                    navigation={this.props.navigation}
                    names={this.state.names}
                    lastNames={this.state.lastNames}
                    direccion={this.state.direccion}
                    barrio={this.state.barrio}
                />
                <ProfileInfo
                    names={this.state.names}
                    lastNames={this.state.lastNames}
                    direccion={this.state.direccion}
                    barrio={this.state.barrio}
                    email={this.state.email}
                    carrera={this.state.carrera}
                    semestre={this.state.semestre}
                    age={this.state.age}
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
