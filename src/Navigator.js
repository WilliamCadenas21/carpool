import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation';

//Screens
import {
    TermScreen, HomeScreen,
    MapScreen,
    SettingsScreen,

} from './screens';
//components
import SignInScreen from './screens/SignInScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ProfileScreen from './screens/ProfileScreen';
import LogInScreen from './screens/LogInScreen';
import EditScreen from './screens/EditScreen';
import CustomDrawer from './components/CustomDrawer';
import FeedScreen from './screens/FeedScreen';
import CreateTravel from './screens/CreateTravel';

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
        Create: {
            screen: CreateTravel,
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
