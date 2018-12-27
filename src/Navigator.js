import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
} from 'react-navigation';

//Screens
import {
    TermScreen, HomeScreen,
    MapScreen,
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
import DriverScreen from './screens/DriverScreen';

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

const BottomTabNavigator = createBottomTabNavigator({
    Rider: {
        screen: ProfileScreen,
    },
    Driver: {
        screen: DriverScreen
    }
});

const AppStackNavigator = createStackNavigator(
    {
        Profile: {
            screen: BottomTabNavigator,
            navigationOptions: () => ({
                headerTransparent: true,
            }),
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
        Terms: {
            screen: TermScreen,
            navigationOptions: () => ({
                headerTransparent: false,
            }),
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
    Profile: ProfileScreen,
    Map: MapScreen,
    Terms: TermScreen,
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
