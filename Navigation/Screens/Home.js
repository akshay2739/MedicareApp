import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import GlobalStyle from '../screens/GlobalStyle'
import logo from './images/doctor.png'
import patientLogo from './images/patient.png'



export default class Home extends Component {
    
    navigateToDoctorLogin =() =>
    {
        
    }

    navigateToPatientLogin =()=>
    {
        console.log('aa')
        const { navigation:navigate } = this.props;
        navigate.navigate('PatientLogin')
    }
    render() {
        
        return (
            <View style={GlobalStyle.container}>
                <View style={styles.body}>
                    <Text style={styles.who}>Who are you?</Text>
                    <View style={styles.card}>
                        <TouchableOpacity
                            onPress={()=>{const { navigation:navigate } = this.props;
                            navigate.navigate('DoctorLogin')}}
                        >
                            <Image source={logo} style={{width:200, height:200 }} />
                        </TouchableOpacity>
                        <Text style={styles.userText}>Doctor</Text>
                    </View>
                    
                    <View style={styles.card}>
                        <TouchableOpacity
                            onPress={this.navigateToPatientLogin}
                        >
                            <Image source={patientLogo}  style={{width:200, height:200 }}/>
                        </TouchableOpacity>
                        <Text style={styles.userText}>Patient</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        body:{
            alignItems:"center"
            
        },

        card:{
            alignItems:"center"
        },
        userText:{
            color:'red',
            fontSize:20,
        },
        who:{
            color:"red",
            fontSize:30
        }
    }
)

