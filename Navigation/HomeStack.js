import {createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from './screens/Home'
import PatientSignUp from './screens/Patient/PatientSignUp'
import PatientLogin from './screens/Patient/Patientlogin'
import DoctorSignUp from './screens/Doctor/DoctorSignUp'
import DoctorLogin from './screens/Doctor/DoctorLogin'
import DoctorDashboard from './screens/Doctor/DoctorDashboard'
import PatientDashBoard from './screens/Patient/PatientDashboard'
import DoctorList from './screens/Patient/DoctorList'
import DoctorForm from './screens/Doctor/DoctorForm'
import PatientForm from './screens/Patient/PatientForm'
import PatientsList from './screens/Doctor/PatientsList'


const screens = {

    Home:{
        screen:Home
    },

    PatientSignUp:{
        screen:PatientSignUp

    },

    PatientLogin:{
        screen:PatientLogin
    },

    DoctorLogin:{
        screen:DoctorLogin
    },

    DoctorSignUp:{
        screen:DoctorSignUp
    },

    PatientDashBoard:{
        screen:PatientDashBoard
   },

   DoctorDashboard:{
       screen:DoctorDashboard
   },

   DoctorList:{
       screen:DoctorList
   },

   DoctorForm:{
       screen:DoctorForm
   },

   PatientForm:{
       screen:PatientForm
   },
   PatientsList:{
       screen:PatientsList
   }
   
}


const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)