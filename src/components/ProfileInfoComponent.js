import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class ProfilInfoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            carrera: '',
            semestre: '',
        };
        this.loadInfo();
    }

    loadInfo = async () => {
        const emailStorage = await AsyncStorage.getItem('email');
        const carreraStorage = await AsyncStorage.getItem('carrera');
        const semestreStorage = await AsyncStorage.getItem('semestre');
        this.setState(() => ({ email: emailStorage }));
        this.setState(() => ({ carrera: carreraStorage }));
        this.setState(() => ({ semestre: semestreStorage }));
    }

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    
                    <TextInput 
                        value={this.state.email} style={styles.textInput}
                        onChangeText={(email) => this.setState({ email })}
                        returnKeyType='next'
                        autoCorrect={false}
                        editable={false}
                    />
                    <TextInput 
                        value={this.state.carrera} style={styles.textInput}
                        onChangeText={(carrera) => this.setState({ carrera })}
                        returnKeyType='next'
                        autoCorrect={false}
                        editable={false}
                    />
                    <TextInput 
                        value={this.state.semestre} style={styles.textInput}
                        onChangeText={(semestre) => this.setState({ semestre })}
                        returnKeyType='next'
                        autoCorrect={false}
                        editable={false}
                    />
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>Agregar Horario</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} >
                            <Text style={styles.buttonText}>Agregar Ubicacion</Text> 
                        </TouchableOpacity>
                    </View>
                    
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
        backgroundColor: 'white',
    },
    profilepic: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'blue',
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
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontStyle: 'italic',
        borderColor: 'grey',
        borderWidth: 1,
    },
    footer: {
        marginTop: 30,
        flex: 1,
        backgroundColor: 'white', 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
});
