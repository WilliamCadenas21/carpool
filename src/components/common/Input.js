import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

class Input extends Component {

    render() {
        const {
            placeholder, 
            onChangeText, 
            keyboardType, 
            returnKeyType, 
            autoCapitalize, 
            autoCorrect, 
            onSubmitEditing, 
            ref, 
            id
        } = this.props;

        return (
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                onSubmitEditing={onSubmitEditing}
                ref={ref}
                id={id}
            />
        );
    }
}

export { Input };

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
});
