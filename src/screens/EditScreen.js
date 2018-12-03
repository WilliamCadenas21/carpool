import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class EditScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>EditScreen</Text>
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
