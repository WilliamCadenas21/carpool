import React, { Component } from 'react';
import {
    View, StyleSheet,
    SafeAreaView, StatusBar,
    ScrollView, TextInput,
    ActivityIndicator,
    Alert, Picker, Keyboard,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { userUpdate } from '../actions';
import { Button, UserPhoto } from '../components';

class EditScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                names: '',
                lastNames: '',
                address: '',
                neighborhood: '',
                degree: '',
                semester: '',
                email: '',
                age: '',
            },
            charging: false,
            semesterData: ['1', '2', '3', '4', ' 5', '6', '7', '8', '9', '10', 'otro']
        };
    }

    componentWillMount() {
        const num = this.props.user.age.toString(10);
        this.setState(() => ({ user: { ...this.props.user, age: num } }));
    }

    onChanged = (text) => {
        let newText = '';
        if (text.length <= 2) {
            const re = new RegExp('^[0-9]+$');
            const no = new RegExp('');
            if (re.test(text) || no.test(text)) {
                newText = text;
                this.setState({ user: { ...this.state.user, age: newText } });
            }
        }
    }

    setInfo = async (user) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
            this.props.userUpdate(user);
        } catch (error) {
            Alert.alert('Advertencia',
                `error: ${error}`,
                [{ text: 'OK' }]
            );
        }
    }

    validate = () => {
        Keyboard.dismiss();
        const { names, lastNames, age, degree, semester, address, neighborhood } = this.state.user;
        if (!names || !lastNames || !age || !degree || !semester || !address || !neighborhood) {
            Alert.alert('Advertencia', 'ningún campo puede estar vacío', [{ text: 'OK' }]);
        } else {
            this.sendUpdate();
        }
    }

    sendUpdate = () => {
        const { age, degree, semester, address, neighborhood, email } = this.state.user;
        const { user } = this.state;
        this.setState(() => ({ charging: true }));
        fetch(`https://carpool-back.herokuapp.com/users/update/${email}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                age,
                degree,
                semester,
                address,
                neighborhood
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res.success === true) {
                    this.setState(() => ({ charging: false }));
                    Alert.alert('Mensaje',
                        'actualización exitosa',
                        [{ text: 'OK' }]);
                    this.setInfo(user);
                    this.props.navigation.navigate('Perfil');
                } else {
                    this.setState(() => ({ charging: false }));
                    Alert.alert('Mensaje',
                        res.message,
                        [{ text: 'OK' }]);
                }
            })
            .catch(err => {
                this.setState(() => ({ charging: false }));
                Alert.alert('Mensaje',
                    `Error en la conexión: ${err}`,
                    [{ text: 'OK' }]);
            });
    }

    pickPhoto = () => {
        Alert.alert('Mensaje',
            'Aquí se tomara la foto de la galería',
            [{ text: 'OK' }]);
    }

    render() {
        const { names, lastNames, age, degree, semester, address, neighborhood } = this.state.user;
        const { user } = this.state;
        const { rider } = this.props.mode;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.innerContainer}>
                        <View style={styles.header}>
                            <UserPhoto color={rider ? '#237EE7' : '#ECA228'} />
                        </View>

                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            {this.state.charging && <ActivityIndicator />}
                        </View>

                        <TextInput
                            placeholder={'Nombres'} style={styles.textInput}
                            onChangeText={(value) =>
                                this.setState({ user: { ...user, names: value } })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={names}
                            editable={false}
                            onSubmitEditing={() => this.refs.txtApellidos.focus()}
                        />

                        <TextInput
                            placeholder={'Apellidos'} style={styles.textInput}
                            onChangeText={(value) =>
                                this.setState({ user: { ...user, lastNames: value } })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={lastNames}
                            ref={'txtApellidos'}
                            editable={false}
                            onSubmitEditing={() => this.refs.txtCarrera.focus()}
                        />

                        <View style={styles.row}>
                            <TextInput
                                placeholder={'edad'} style={styles.textInput}
                                onChangeText={(value) => this.onChanged(value)}
                                autoCorrect={false}
                                value={age}
                                keyboardType='numeric'
                            />
                        </View>

                        <TextInput
                            placeholder={'Carrera'} style={styles.textInput}
                            onChangeText={(value) =>
                                this.setState({ user: { ...user, degree: value } })}
                            returnKeyType='next'
                            ref={'txtCarrera'}
                            value={degree}
                            onSubmitEditing={() => this.refs.txtDireccion.focus()}
                        />

                        <View style={styles.row}>
                            <TextInput
                                placeholder={'semester'} style={styles.textInput}
                                autoCorrect={false}
                                editable={false}
                                value={semester}
                            />
                            <Picker
                                selectedValue={semester}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(value) =>
                                    this.setState({ user: { ...user, semester: value } })}
                            >
                                {this.state.semesterData.map((item, index) => (
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
                            onChangeText={(value) =>
                                this.setState({ user: { ...user, address: value } })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={address}
                            ref={'txtDireccion'}
                            onSubmitEditing={() => this.refs.txtBarrio.focus()}
                        />

                        <TextInput
                            placeholder={'Barrio'} style={styles.textInput}
                            onChangeText={(value) =>
                                this.setState({ user: { ...user, neighborhood: value } })}
                            returnKeyType='next'
                            autoCorrect={false}
                            value={neighborhood}
                            ref={'txtBarrio'}
                            onSubmitEditing={this.validate}
                        />

                        <Button
                            onPress={this.validate}
                        >
                            Guardar cambios
                        </Button>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.userInfo, mode: state.userMode });

export default connect(mapStateToProps, { userUpdate })(EditScreen);

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
        borderRadius: 4,
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
});
