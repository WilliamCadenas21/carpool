import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    AsyncStorage,
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
            direccion: '',
            barrio: '',
            email: '',
            carrera: '',
            semestre: '',
            editable: false,
            firstCharge: true,
        };
        if (this.state.firstCharge === true) this.loadInfo();
    }

    loadInfo = async () => {
        const namesStorage = await AsyncStorage.getItem('names');
        const lastNamesStorage = await AsyncStorage.getItem('lastNames');
        const direccionStorage = await AsyncStorage.getItem('direccion');
        const barrioStorage = await AsyncStorage.getItem('barrio');
        const emailStorage = await AsyncStorage.getItem('email');
        const carreraStorage = await AsyncStorage.getItem('carrera');
        const semestreStorage = await AsyncStorage.getItem('semestre');
        this.setState(() => ({ names: namesStorage }));
        this.setState(() => ({ lastNames: lastNamesStorage }));
        this.setState(() => ({ direccion: direccionStorage }));
        this.setState(() => ({ barrio: barrioStorage }));
        this.setState(() => ({ email: emailStorage }));
        this.setState(() => ({ carrera: carreraStorage }));
        this.setState(() => ({ semestre: semestreStorage }));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                    <ProfileHeaderComponent 
                        names={this.state.names} 
                        lastNames={this.state.lastNames}
                        direccion={this.state.direccion} 
                        barrio={this.state.barrio}            
                    />
                    <ProfileInfoComponent 
                        names={this.state.names} 
                        lastNames={this.state.lastNames}
                        direccion={this.state.direccion} 
                        barrio={this.state.barrio}
                        email={this.state.email}
                        carrera={this.state.carrera} 
                        semestre={this.state.semestre} 
                    />
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
    }
});