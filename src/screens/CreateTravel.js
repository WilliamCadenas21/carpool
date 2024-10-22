import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker,
    Keyboard,
    Alert,
    ScrollView,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button } from '../components';
import { createTravel } from '../actions/TravelsActions';
import { io } from '../lib/socket';

class CreateTravel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travel: {
                startingPoint: '',
                endPoint: '',
                date: '',
                emailDriver: '',
                seats: '4',
            },
            charging: false,
            isDateTimePickerVisible: false,
            seats: ['1', '2', '3', '4']
        };
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    handleDatePicked = (date) => {
        const { travel } = this.state;
        const vec = date.toString().split('G');
        this.setState({ travel: { ...travel, date: vec[0] } });
        this.hideDateTimePicker();
    };

    validate = async () => {
        Keyboard.dismiss();
        const { startingPoint, endPoint, date, seats } = this.state.travel;
        if (!startingPoint || !endPoint || !date || !seats) {
            Alert.alert('Advertencia', 'ningún campo puede estar vacío', [{ text: 'OK' }]);
        } else {
            await this.sendUpdate();
        }
    }

    sendUpdate = async () => {
        try {
            const travel = this.state.travel;
            const { token, email } = this.props.user;
            this.setState(() => ({ charging: true }));
            const url = 'https://carpool-back.herokuapp.com/travels/create';
            const configObj = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    travel,
                    email,
                    token
                })
            };
            const response = await fetch(url, configObj);
            const res = await response.json();
            
            this.setState(() => ({ charging: false }));
            if (res.success === true) {
                io.emit('travelAdded');
                this.props.createTravel(res.message);
                Alert.alert('Mensaje',
                    'Viaje registrado',
                    [{ text: 'OK' }]);
                this.props.navigation.navigate('Feed');
            } else {
                Alert.alert('Mensaje',
                    'Error en la actualización',
                    [{ text: 'OK' }]);
            }
        } catch (e) {
            this.setState(() => ({ charging: false }));
            console.log(e);
            Alert.alert('Mensaje',
                `Error en la conexión: ${e}`,
                [{ text: 'OK' }]);
        }
    }

    render() {
        const { travel } = this.state;
        const { startingPoint, endPoint, date, seats } = travel;
        return (
            <View style={styles.mainContainer}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.header}>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Ubicación inicial
                            </Text>
                            <TextInput
                                placeholder={'Ubicación inicial'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ travel: { ...travel, startingPoint: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                value={startingPoint}
                                onSubmitEditing={() => this.refs.txtModel.focus()}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Ubicación final
                            </Text>
                            <TextInput
                                placeholder={'Ubicación final'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ travel: { ...travel, endPoint: value } })}
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtModel'}
                                value={endPoint}
                                onSubmitEditing={() => this.refs.txtColor.focus()}
                            />
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Fecha y hora
                            </Text>
                            <TextInput
                                placeholder={'fecha y hora'}
                                style={styles.textInput}
                                onChangeText={(value) =>
                                    this.setState({ travel: { ...travel, date: value } })}
                                autoCorrect={false}
                                editable={false}
                                value={date}
                                onSubmitEditing={() => this.refs.txtColor.focus()}
                            />
                            <Button
                                onPress={this.showDateTimePicker}
                                ParentStyle={{ backgroundColor: '#ECA228' }}
                            >
                                Seleccionar fecha y hora
                            </Button>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textForInput}>
                                Asientos disponibles
                        </Text>
                            <View style={styles.boxStyle}>
                                <Picker
                                    selectedValue={seats}
                                    style={{ height: 50, width: 100 }}
                                    onValueChange={(value) =>
                                        this.setState({ travel: { ...travel, seats: value } })}
                                >
                                    {this.state.seats.map((item, index) => (
                                        <Picker.Item
                                            label={item}
                                            value={item}
                                            key={index}
                                        />
                                    ))}
                                </Picker>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            {this.state.charging && <ActivityIndicator />}
                        </View>

                        <Button
                            onPress={this.validate}
                            ParentStyle={{ marginTop: 10, backgroundColor: '#ECA228' }}
                        >
                            Crear viaje
                        </Button>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                            mode={'datetime'}
                            is24Hour
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.userInfo });

export default connect(mapStateToProps, { createTravel })(CreateTravel);

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
        paddingVertical: 15
    },
    row: {
        flex: 1,
        flexDirection: 'row',
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
    boxStyle: {
        alignSelf: 'stretch',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
    }
});
