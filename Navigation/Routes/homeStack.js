import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../Screens/Home'
import Details from '../Screens/Details'

const screens = {
    Home : {
        screen:Home
    },
    Details : {
        screen : Details
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)