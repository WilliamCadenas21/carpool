import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const Button = ({ onPress, children, style }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            style={[buttonStyle, style]}
            onPress={onPress}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#237EE7',
        paddingVertical: 15,
        marginBottom: 15,
        alignItems: 'center',
        borderRadius: 4,
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
});

export { Button };
