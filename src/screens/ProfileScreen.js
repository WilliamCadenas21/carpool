import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { modeUpdate, userUpdate } from '../actions';
import ProfileInfo from '../components/ProfileInfo';

class ProfileScreen extends Component {
    static navigationOptions = () => ({
        title: 'Perfil',
    });

    componentWillMount() {
        console.log(this.props.navigation);
    }
    userModeChanged = (value) => {
        this.props.modeUpdate(value);
    };
    render() {
        const { rider } = this.props.mode;
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <View style={styles.main}>
                    <ProfileInfo
                        user={this.props.user}
                        color={rider ? '#237EE7' : '#ECA228'}
                        navigation={this.props.navigation}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.userInfo, mode: state.userMode });

export default connect(mapStateToProps, { modeUpdate, userUpdate })(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
    header: {
        flex: 0.7,
        backgroundColor: 'transparent'
    },
    footer2: {
        flex: 0.7,
        backgroundColor: 'transparent'
    },
    main: {
        flex: 8,
    },
});
