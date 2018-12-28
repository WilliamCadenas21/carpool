import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
    TextInput,
    Keyboard,
    AsyncStorage,
    Alert,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { driverUpdate } from '../actions';
import { UserPhoto, Button } from '../components';

class DriverScreen extends Component {
    static navigationOptions = () => ({
        title: 'Conductor',
    });

    constructor(props) {
        super(props);
        this.state = {
            car: {
                ...props.car,
            },
            charging: false,
        };
    }

    setInfo = async (car) => {
        try {
            await AsyncStorage.setItem('car', JSON.stringify(car));
            this.props.driverUpdate(car);
        } catch (error) {
            Alert.alert('Advertencia',
                `error: ${error}`,
                [{ text: 'OK' }]
            );
        }
    }
    
    validate = () => {
        Keyboard.dismiss();
        const { plate, model, color, brand } = this.state.car;
        if (!plate || !model || !color || !brand) {
            Alert.alert('Advertencia', 'ningún campo puede estar vacío', [{ text: 'OK' }]);
        } else {
            this.sendUpdate();
        }
    }

    sendUpdate = () => {
        const { token } = this.props.user;
        const { car } = this.state;
        const user = this.props.user;
        this.setState(() => ({ charging: true }));
        fetch('https://carpool-back.herokuapp.com/users/create/driver', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_id: user.email,
                car,
                token
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState(() => ({ charging: false }));
                if (res.success === true) {
                    Alert.alert('Mensaje',
                        'actualización exitosa',
                        [{ text: 'OK' }]);
                    this.setInfo(car);
                    this.props.navigation.navigate('Feed');
                } else {
                    Alert.alert('Mensaje',
                        res.message,
                        [{ text: 'OK' }]);
                }
            })
            .done();
    }

    render() {
        const { plate, model, color, brand } = this.state.car;
        const { car } = this.state;
        return (
            <View style={styles.mainContainer}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.header}>
                        <View style={styles.photoWrapper}>
                            <UserPhoto
                                color={this.props.mode.color}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Placa
                            </Text>
                            <TextInput
                                placeholder={'Placa'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ car: { ...car, plate: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                value={plate}
                                autoCapitalize={'characters'}
                                onSubmitEditing={() => this.refs.txtModel.focus()}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Modelo
                            </Text>
                            <TextInput
                                placeholder={'Modelo'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ car: { ...car, model: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                value={model}
                                ref={'txtModel'}
                                onSubmitEditing={() => this.refs.txtColor.focus()}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Color
                            </Text>
                            <TextInput
                                placeholder={'Color'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ car: { ...car, color: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                value={color}
                                ref={'txtColor'}
                                onSubmitEditing={() => this.refs.txtMarca.focus()}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Marca
                            </Text>
                            <TextInput
                                placeholder={'Marca'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ car: { ...car, brand: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                value={brand}
                                ref={'txtMarca'}
                                onSubmitEditing={this.validate}
                            />
                        </View>

                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            {this.state.charging && <ActivityIndicator />}
                        </View>

                        <Button
                            onPress={this.validate}
                            ParentStyle={{ backgroundColor: this.props.mode.color }}
                        >
                            {this.props.car.plate ? 'Guardar Cambios' : 'Registrar Vehículo'}
                        </Button>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.userInfo,
    car: state.driverInfo,
    mode: state.userMode
});

export default connect(mapStateToProps, { driverUpdate })(DriverScreen);

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
    textForInput: {
        paddingTop: 15,
        paddingRight: 10,
    },
});
