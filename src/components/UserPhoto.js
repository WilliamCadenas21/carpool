import React from 'react';
import {
    View,
    Image,
    StyleSheet,

} from 'react-native';

const image = require('../assets/images/userImage.jpg');

const UserPhoto = ({ color }) => (
    <View style={[styles.profilePicWrapper, { borderColor: color }]}>
        <Image
            style={styles.profilePic}
            source={image}
        />
    </View>
);

export { UserPhoto };

const styles = StyleSheet.create({
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    profilePicWrapper: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderColor: '#237EE7',
        borderWidth: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
