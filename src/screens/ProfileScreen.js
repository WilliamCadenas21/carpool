import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    AsyncStorage,
    StatusBar,
    TouchableOpacity,
    Text,
} from 'react-native';

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
            age: ''
        };
        this.loadInfo();
    }
    
    loadInfo = async () => {
        const namesStorage = await AsyncStorage.getItem('names');
        const lastNamesStorage = await AsyncStorage.getItem('lastNames');
        const direccionStorage = await AsyncStorage.getItem('direccion');
        const barrioStorage = await AsyncStorage.getItem('barrio');
        const emailStorage = await AsyncStorage.getItem('email');
        const carreraStorage = await AsyncStorage.getItem('carrera');
        const semestreStorage = await AsyncStorage.getItem('semestre');
        const ageStorage = await AsyncStorage.getItem('age');
        this.setState(() => ({ names: namesStorage }));
        this.setState(() => ({ lastNames: lastNamesStorage }));
        this.setState(() => ({ direccion: direccionStorage }));
        this.setState(() => ({ barrio: barrioStorage }));
        this.setState(() => ({ email: emailStorage }));
        this.setState(() => ({ carrera: carreraStorage }));
        this.setState(() => ({ semestre: semestreStorage }));
        this.setState(() => ({ age: ageStorage }));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                    <ProfileHeaderComponent 
                        navigation={this.props.navigation}
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
                        age={this.state.age}
                    />
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>Agregar Horario</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} >
                            <Text style={styles.buttonText}>Agregar Ubicación</Text> 
                        </TouchableOpacity>
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
    button1: {
        backgroundColor: '#ECA228', //naranja
        padding: 15,
        alignItems: 'center',
        borderRadius: 20, 
        height: 50,
        
    },
    button2: {
        backgroundColor: '#237EE7', //naranja
        padding: 15,
        alignItems: 'center',
        borderRadius: 20,
        height: 50,
    },
});
