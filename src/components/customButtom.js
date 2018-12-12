import React from 'react';

import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

const componentName = (props) => (
    <View style={styles.container}>
        <Text>componentName</Text>
    </View>
);

export default componentName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
