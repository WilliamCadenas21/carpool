import React from 'react';

import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const Button = ({ onPress, children, ParentStyle, ParentTextStyle }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            style={[buttonStyle, ParentStyle]}
            onPress={onPress}
        >
            <Text style={[textStyle, ParentTextStyle]}>{children}</Text>
        </TouchableOpacity>
    );
};

export { Button };

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

