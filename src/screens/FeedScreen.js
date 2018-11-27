import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";

export default class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white'/>
                <Text>FeedScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center'
    }
});