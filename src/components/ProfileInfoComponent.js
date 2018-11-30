import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Picker,
    ScrollView,
} from 'react-native';

export default class ProfilInfoComponent extends Component {

    render() {
        return (
            <View style={styles.headerBackground}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.header}>
                    <ScrollView>
                        <View style={styles.row}>
                            <Text style={styles.textForInput}>
                                Correo:
                            </Text>
                            <TextInput 
                                value={this.props.email} style={styles.textInput}
                                onChangeText={(email) => this.setState({ email })}
                                returnKeyType='next'
                                autoCorrect={false}
                                editable={false}
                            />
                        </View>
    
                        <View style={styles.row}>
                            <Text style={styles.textForInput}>
                                Carrera:
                            </Text>
                            <TextInput 
                                value={this.props.carrera} style={styles.textInput}
                                onChangeText={(carrera) => this.setState({ carrera })}
                                returnKeyType='next'
                                autoCorrect={false}
                                editable={false}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.textForInput}>
                                Semestre:
                            </Text>
                            <TextInput 
                                value={this.props.semestre} style={styles.textInput}
                                onChangeText={(semestre) => this.setState({ semestre })}
                                returnKeyType='next'
                                autoCorrect={false}
                                editable={false}
                            />
                            {/*<Picker
                                selectedValue={this.state.language}
                                style={{ height: 50, width: 100 }}
                                onValueChange={(semestreChange) => 
                                this.setState({ semestre: semestreChange })} 
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                                <Picker.Item label="10" value="10" />
                            </Picker>*/}
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.textForInput}>
                                Dirección:
                            </Text>
                            <TextInput 
                                value={this.props.direccion} style={styles.textInput}
                                onChangeText={(direccion) => this.setState({ direccion })}
                                returnKeyType='next'
                                autoCorrect={false}
                                editable={false}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.textForInput}>
                                Barrio:
                            </Text>
                            <TextInput 
                                value={this.props.barrio} style={styles.textInput}
                                onChangeText={(barrio) => this.setState({ barrio })}
                                returnKeyType='next'
                                autoCorrect={false}
                                editable={false}
                            />
                        </View>

                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.button1}>
                                <Text style={styles.buttonText}>Agregar Horario</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2} >
                                <Text style={styles.buttonText}>Agregar Ubicacion</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2} >
                                <Text style={styles.buttonText}>Editar</Text> 
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
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
    name: {
        marginTop: 20,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    textInput: {
        borderColor: 'blue',
        borderWidth: 0,
        alignSelf: 'stretch',
    },
    textForInput: {
        paddingTop: 15,
    },
    footer: {
        marginTop: 30,
        flex: 1,
        backgroundColor: 'white', 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
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