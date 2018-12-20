import React from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation';
import {
    View,
    TouchableOpacity,
} from 'react-native';

import {
    Icon
} from 'native-base';
//Screens
import {
    TermScreen, HomeScreen,
    MapScreen,
    FeedScreen, SettingsScreen, 
    EditScreen
} from './screens';
//components
import SignInScreen from './screens/SignInScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ProfileScreen from './screens/ProfileScreen';
import LogInScreen from './screens/LogInScreen';

import { CustomDrawer } from './components';

const AuthStackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Sign_in: SignInScreen,
        Log_in: LogInScreen,
        Terms: TermScreen,
    },
    {
        initialRouteName: 'Home',
    },
);

const AppStackNavigator = createStackNavigator(
    {
        Perfil: {
            screen: ProfileScreen,
        },
        Edit: {
            screen: EditScreen,
            navigationOptions: () => ({
                headerTransparent: true,
            }),
        },
        Map: {
            screen: MapScreen,
            navigationOptions: () => ({
                headerTransparent: true,
            }),
        },
        Terminos: {
            screen: TermScreen,
            navigationOptions: () => ({
                headerTransparent: false,
            }),
        },
        Setting: {
            screen: SettingsScreen,
            navigationOptions: () => ({
                title: 'Cerrar Sesión',
                headerTransparent: true,
            })
        },
        Feed: {
            screen: FeedScreen,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Icon name="menu" />
                        </View>
                    </TouchableOpacity>
                ),
                headerTransparent: true,
            })
        }
    },
    {
        initialRouteName: 'Feed'
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Feed: AppStackNavigator,
    Perfil: ProfileScreen,
    Map: MapScreen,
    Terminos: TermScreen,
    Setting: SettingsScreen,
},
    {
        contentComponent: CustomDrawer,
    });

const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator,
});

export default SwitchNavigator;
