import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button } from '../components';

class CreateTravel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travel: {
                startingPoint: '',
                endPoint: '',
                date_hour: '',
                email_id_driver: '',
            },
            charging: false,
            isDateTimePickerVisible: false,
        };
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        const { travel } = this.state;
        const vec = date.toString().split('G');
        this.setState({ travel: { ...travel, date_hour: vec[0] } });
        this.hideDateTimePicker();
    };

    render() {
        const { travel } = this.state;
        const { startingPoint, endPoint, date_hour } = travel;
        return (
            <View style={styles.mainContainer}>
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
                                this.setState({ travel: { ...travel, date_hour: value } })}
                            autoCorrect={false}
                            editable={false}
                            value={date_hour}
                            onSubmitEditing={() => this.refs.txtColor.focus()}
                        />
                        <Button
                            onPress={this.showDateTimePicker}
                            ParentStyle={{ backgroundColor: '#ECA228' }}
                        >
                            Seleccionar fecha y hora
                        </Button>
                    </View>

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        mode={'datetime'}
                        is24Hour
                    />
                </View>
            </View>
        );
    }
}

export default CreateTravel;

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
});
