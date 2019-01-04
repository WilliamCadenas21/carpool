import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = (props) => {
    const { containerStyle, body } = styles;
    const { children, color } = props;
    return (
        <View style={containerStyle}>
            <View style={[body, { borderLeftColor: color }]}>
                <TouchableOpacity>
                    {children}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export { Card };

const styles = {
    body: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        borderLeftWidth: 10,
        paddingHorizontal: 10,
    },
    containerStyle: {
        height: 90,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 4,
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 5,
        flexDirection: 'row'
    }
};
