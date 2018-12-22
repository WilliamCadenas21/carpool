import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

class CreateTravel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CreateTravel</Text>
            </View>
        );
    }
}

export default CreateTravel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
