import {createStackNavigator} from "react-navigation-stack";
import SettingsScreen from "./NavigationComponents/SettingsScreen";
import DetailsScreen from "./NavigationComponents/DetailsScreen";

const SettingStack = createStackNavigator(
    {
        Settings: {screen: SettingsScreen },
        Details: {screen: DetailsScreen },
    },
    {
        initialRouteName: 'Settings',
        navigationOptions: {
          //  title: 'Main'
        }
    }
);

export default SettingStack