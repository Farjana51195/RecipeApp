import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen
        },
        Details: {
            screen: DetailsScreen
        }
    })


    export default createAppContainer(AppNavigator);