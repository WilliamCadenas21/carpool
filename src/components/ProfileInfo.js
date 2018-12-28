import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
    TextInput,
    Picker,
    Keyboard,
    AsyncStorage,
    Alert,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { userUpdate } from '../actions';
import { UserPhoto, Button } from '../components';

class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        const num = (this.props.user.age ? this.props.user.age.toString(10) : '');
        this.state = {
            user: {
                ...props.user,
                age: num
            },
            charging: false,
            semesterData: ['1', '2', '3', '4', ' 5', '6', '7', '8', '9', '10', 'otro']
        };
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
        const { age, degree, semester, address, neighborhood } = this.state.user;
        const { token, email } = this.props.user;
        const { user } = this.state;
        this.setState(() => ({ charging: true }));
        fetch('https://carpool-back.herokuapp.com/users/update/rider', {
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
                neighborhood,
                email_id: email,
                token
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState(() => ({ charging: false }));
                if (res.success === true) {
                    console.log('Todo bien');
                    Alert.alert('Mensaje',
                        'actualización exitosa',
                        [{ text: 'OK' }]);
                    this.setInfo(user);
                    this.props.navigation.navigate('Feed');
                } else {
                    console.log('error fatal');
                    Alert.alert('Mensaje',
                        'Error en la actualización',
                        [{ text: 'OK' }]);
                }
            })
            .done();
    }

    render() {
        const { names, lastNames, email, age, degree,
            semester, address, neighborhood } = this.state.user;
        const { user } = this.state;
        return (
            <View style={styles.mainContainer}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.header}>
                        <View style={styles.photoWrapper}>
                            <UserPhoto
                                color={this.props.color}
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Correo
                            </Text>
                            <TextInput
                                placeholder={'Email'} style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ user: { ...user, names: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                value={email}
                                editable={false}
                                onSubmitEditing={() => this.refs.txtApellidos.focus()}
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Nombres
                            </Text>
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
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Apellidos
                            </Text>
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
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Edad
                            </Text>
                            <TextInput
                                placeholder={'edad'} style={styles.textInput}
                                onChangeText={(value) => this.onChanged(value)}
                                autoCorrect={false}
                                value={age}
                                keyboardType='numeric'
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Carrera
                            </Text>
                            <TextInput
                                placeholder={'Carrera'} style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ user: { ...user, degree: value } })}
                                returnKeyType='next'
                                ref={'txtCarrera'}
                                value={degree}
                                onSubmitEditing={() => this.refs.txtDireccion.focus()}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Semestre
                            </Text>
                            <TextInput
                                placeholder={'semester'} style={styles.textInput}
                                autoCorrect={false}
                                editable={false}
                                value={semester}
                            />
                            <View>
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
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Dirección
                            </Text>
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
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Barrio
                            </Text>
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
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            {this.state.charging && <ActivityIndicator />}
                        </View>

                        <Button
                            onPress={this.validate}
                            ParentStyle={{ backgroundColor: this.props.color }}
                        >
                            Guardar cambios
                        </Button>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.userInfo, mode: state.userMode });

export default connect(mapStateToProps, { userUpdate })(ProfileInfo);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    header: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    textForInput: {
        paddingTop: 15,
        paddingRight: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
    photoWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});
