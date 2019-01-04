import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { ListItem } from '../components';
import { setTravels } from '../actions/TravelsActions';

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

    constructor(props) {
        super(props);
        this.state = {
            charging: false,
        };
    }

    componentWillMount() {
        this.loadTravels();
        console.log(this.props.travels);
    }

    loadTravels = async () => {
        try {
            this.setState(() => ({ charging: true }));
            const { email, token } = this.props.user;
            const url = 'https://carpool-back.herokuapp.com/travels/get';
            const configObj = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    token
                })
            };
            const response = await fetch(url, configObj);
            const res = await response.json();
            this.setState(() => ({ charging: false }));
            if (res.success === true) {
                this.props.setTravels(res.message);
            } else {
                Alert.alert('Mensaje',
                    'Error ',
                    [{ text: 'OK' }]);
            }
        } catch (e) {
            this.setState(() => ({ charging: false }));
            Alert.alert('Mensaje',
                `Error en la conexión: ${e}`,
                [{ text: 'OK' }]);
        }
    }

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
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        {this.state.charging && <ActivityIndicator />}
                    </View>
                    {<FlatList
                        data={this.props.travels}
                        renderItem={this.renderItem}
                        keyExtractor={(travel) => travel.id.toString()}
                    />}
                </View>
                <View style={footer} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.userInfo, travels: state.travel, mode: state.userMode };
};

export default connect(mapStateToProps, { setTravels })(FeedScreen);

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
