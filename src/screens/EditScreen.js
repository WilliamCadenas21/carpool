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
    Image,
    Picker,
    Keyboard,
    AsyncStorage
} from 'react-native';

const image = require('../assets/images/userImage.jpg');

export default class EditScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: '',
            lastNames: '',
            direccion: '',
            barrio: 'Barrio',
            carrera: 'Carrera',
            semestre: 'Semestre',
            email: '',
            age: '',
            charging: false,
            semestreData: ['1', '2', '3', '4', ' 5', '6', '7', '8', '9', '10', 'otro']
        };
        this.loadInfo();
    }

    onChanged = (text) => {
        let newText = '';

        if (text.length <= 2) {
            const re = new RegExp('^[0-9]+$');
            const no = new RegExp('');
            if (re.test(text) || no.test(text)) {
                newText = text;
                this.setState({ age: newText });
            }
        }
    }

    setInfo = async () => {
        try {
            await AsyncStorage.setItem('semestre', this.state.semestre);
            await AsyncStorage.setItem('age', this.state.age);
            await AsyncStorage.setItem('carrera', this.state.carrera);
            await AsyncStorage.setItem('direccion', this.state.direccion);
            await AsyncStorage.setItem('barrio', this.state.barrio);
        } catch (error) {
            Alert.alert('Advertencia',
                'ocurrió un error al cargar la información del usuario',
                [{ text: 'OK' }]);
        }
    }

    loadInfo = async () => {
        const namesStorage = await AsyncStorage.getItem('names');
        const lastNamesStorage = await AsyncStorage.getItem('lastNames');
        const direccionStorage = await AsyncStorage.getItem('direccion');
        const barrioStorage = await AsyncStorage.getItem('barrio');
        const carreraStorage = await AsyncStorage.getItem('carrera');
        const semestreStorage = await AsyncStorage.getItem('semestre');
        const ageStorage = await AsyncStorage.getItem('age');
        const emailStorage = await AsyncStorage.getItem('email');
        this.setState(() => ({ names: namesStorage }));
        this.setState(() => ({ lastNames: lastNamesStorage }));
        this.setState(() => ({ direccion: direccionStorage }));
        this.setState(() => ({ barrio: barrioStorage }));
        this.setState(() => ({ carrera: carreraStorage }));
        this.setState(() => ({ semestre: semestreStorage }));
        this.setState(() => ({ age: ageStorage }));
        this.setState(() => ({ email: emailStorage }));
    }

    validate = () => {
        Keyboard.dismiss();
        if (!this.state.names || !this.state.lastNames || !this.state.age
            || !this.state.carrera || !this.state.semestre || !this.state.direccion
            || !this.state.barrio) {
            Alert.alert('Advertencia', 'ningún campo puede estar vacío', [{ text: 'OK' }]);
        } else {
            this.sendUpdate();
        }
    }

    sendUpdate = () => {
        this.setState(() => ({ charging: true }));
        fetch(`https://carpool-back.herokuapp.com/users/update/${this.state.email}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                edad: this.state.age,
                carrera: this.state.carrera,
                semestre: this.state.semestre,
                direccion: this.state.direccion,
                barrio: this.state.barrio
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res.success === true) {
                    this.setState(() => ({ charging: false }));
                    Alert.alert('Mensaje',
                        'actualización exitosa',
                        [{ text: 'OK' }]);
                    this.setInfo();
                    this.props.navigation.navigate('Perfil');
                } else {
                    this.setState(() => ({ charging: false }));
                    Alert.alert('Mensaje',
                        res.message,
                        [{ text: 'OK' }]);
                }
            })
            .done();
    }

    pickPhoto = () => {
        Alert.alert('Mensaje',
            'Aquí se tomara la foto de la galería',
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
                                <TouchableOpacity
                                    onPress={this.pickPhoto}
                                >
                                    <Image
                                        style={styles.profilePic}
                                        source={image}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            {this.state.charging && <ActivityIndicator />}
                        </View>

                        <TextInput
                            placeholder={'Nombres'} style={styles.textInput}
                            onChangeText={(names) => this.setState({ names })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={this.state.names}
                            editable={false}
                            onSubmitEditing={() => this.refs.txtApellidos.focus()}
                        />

                        <TextInput
                            placeholder={'Apellidos'} style={styles.textInput}
                            onChangeText={(lastNames) => this.setState({ lastNames })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={this.state.lastNames}
                            ref={'txtApellidos'}
                            editable={false}
                            onSubmitEditing={() => this.refs.txtCarrera.focus()}
                        />

                        <View style={styles.row}>
                            <TextInput
                                placeholder={'edad'} style={styles.textInput}
                                onChangeText={(age) => this.onChanged(age)}
                                autoCorrect={false}
                                value={this.state.age}
                                keyboardType='numeric'
                                onFocus={() => this.onChanged('')}
                            />
                            {/*<Picker
                                selectedValue={this.state.semestre}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(ageChange) =>
                                    this.setState({ age: ageChange })}
                            >
                                {this.state.semestreData.map((item, index) => (
                                    <Picker.Item
                                        label={item}
                                        value={index}
                                    />
                                ))}
                            </Picker>*/}
                        </View>

                        <TextInput
                            placeholder={'Carrera'} style={styles.textInput}
                            onChangeText={(carrera) => this.setState({ carrera })}
                            returnKeyType='next'
                            ref={'txtCarrera'}
                            value={this.state.carrera}
                            onSubmitEditing={() => this.refs.txtDireccion.focus()}
                        />

                        <View style={styles.row}>
                            <TextInput
                                placeholder={'Semestre'} style={styles.textInput}
                                onChangeText={(semestre) => this.setState({ semestre })}
                                autoCorrect={false}
                                editable={false}
                                value={this.state.semestre}
                            />
                            <Picker
                                selectedValue={this.state.semestre}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(semestreChange) =>
                                    this.setState({ semestre: semestreChange })}
                            >
                                {this.state.semestreData.map((item, index) => (
                                    <Picker.Item
                                        label={item}
                                        value={item}
                                        key={index}
                                    />
                                ))}
                            </Picker>
                        </View>

                        <TextInput
                            placeholder={'Dirección'} style={styles.textInput}
                            onChangeText={(direccion) => this.setState({ direccion })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={this.state.direccion}
                            ref={'txtDireccion'}
                            onSubmitEditing={() => this.refs.txtBarrio.focus()}
                        />

                        <TextInput
                            placeholder={'Barrio'} style={styles.textInput}
                            onChangeText={(barrio) => this.setState({ barrio })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={this.state.barrio}
                            ref={'txtBarrio'}
                            onSubmitEditing={this.validate}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.validate}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView >
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
    row: {
        flex: 1,
        flexDirection: 'row',
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
