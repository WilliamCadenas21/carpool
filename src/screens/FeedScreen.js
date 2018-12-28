import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { Card, ListItem } from '../components';

class FeedScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Icon name="menu" />
                </View>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('Create')}
            >
                <Text style={{ color: '#237EE7' }}>Crear</Text>
            </TouchableOpacity>
        ),
        headerTransparent: true,
    })

    renderItem = (travel) => {
        return (
            <ListItem color={this.props.mode.color} travel={travel} />
        );
    };

    render() {
        const { container, header, footer, scroll } = styles;
        return (
            <View style={container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={header} />
                <View style={scroll}>
                    <FlatList
                        data={this.props.travels}
                        renderItem={this.renderItem}
                        keyExtractor={(travel) => travel.id}
                    />
                </View>
                <View style={footer} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { travels: state.travel, mode: state.userMode };
};

export default connect(mapStateToProps)(FeedScreen);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    footer: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    scroll: {
        flex: 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    }
});
