/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';

const image = require('../assets/images/userImage.jpg');

export default class EditScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: '',
            lastNames: '',
            email: '',
            password1: '',
            password2: '',
            charging: false,
        };
    }

    sendUpdate = () => {
        Alert.alert('Mensaje',
            'este alerta funciona',
            [{ text: 'OK' }]);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.innerContainer}>
                        <View style={styles.header}>
                            <View style={styles.profilePicWrapper}>
                                <Image
                                    style={styles.profilePic}
                                    source={image}
                                />
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            {this.state.charging ? <ActivityIndicator /> : <Text />}
                        </View>

                        <TextInput
                            placeholder={'Nombres'} style={styles.textInput}
                            onChangeText={(names) => this.setState({ names })}
                            returnKeyType='next'
                            autoCorrect={false}
                            onSubmitEditing={() => this.refs.txtApellidos.focus()}
                        />

                        <TextInput
                            placeholder={'Apellidos'} style={styles.textInput}
                            onChangeText={(lastNames) => this.setState({ lastNames })}
                            returnKeyType='next'
                            autoCorrect={false}
                            ref={'txtApellidos'}
                            onSubmitEditing={() => this.refs.txtEmail.focus()}
                        />

                        <TextInput
                            placeholder={'Email@uninorte.edu.co'} style={styles.textInput}
                            onChangeText={(email) => this.setState({ email })}
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                            autoCapitalize='none'
                            ref={'txtEmail'}
                            onSubmitEditing={() => this.refs.txtPassword1.focus()}
                        />

                        <TextInput
                            placeholder={'Contraseña'} style={styles.textInput}
                            onChangeText={(password1) => this.setState({ password1 })}
                            returnKeyType='next'
                            autoCorrect={false}
                            ref={'txtPassword1'}
                            secureTextEntry
                            onSubmitEditing={() => this.refs.txtPassword2.focus()}
                        />

                        <TextInput
                            placeholder={'Confirmar contraseña'} style={styles.textInput}
                            onChangeText={(password2) => this.setState({ password2 })}
                            autoCorrect={false}
                            secureTextEntry
                            ref={'txtPassword2'}
                            onSubmitEditing={this.singIn}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.sendUpdate}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 0,
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
    },
    textInput: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 15,
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#237EE7',
        padding: 15,
        alignItems: 'center',
        borderRadius: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    footer: {
        color: 'black',
        fontSize: 13,
        opacity: 0.4,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    terms: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    profilePicWrapper: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: '#237EE7',
        marginTop: 40,        
        marginBottom: 5,
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: '#ECA228',
        borderWidth: 2,
    },
});
