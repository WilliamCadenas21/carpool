import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";

export default class ProfileScreen extends Component {

    signOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign Out" onPress={this.signOut} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});