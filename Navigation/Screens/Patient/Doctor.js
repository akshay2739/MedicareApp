import React, { Component } from 'react'
import { Text, View ,StyleSheet,Button,Image,Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import logo from '../images/doctor.png'
import firebase from 'firebase'

export default class Doctor extends Component {
    componentDidMount()
    {
        db = firebase.firestore(); 
        /*db.collection("Patients").doc(this.props.userName).get().then((doc) => 
        {
            if (doc.exists) {

                this.Name=doc.data().Name,
                this.Age=doc.data().Age,
                this.BP=doc.data().BP,
                this.Diabetes=doc.data().Diabetes,
                this.Weight=doc.data().Weight,
                this.Gender=doc.data().Gender
            } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
            
              //  Alert.alert(doc.data().Age)
                this.UserName=doc.data().UserName,
                this.Name=doc.data().Name,
                this.Age=doc.data().Age,
                this.BP=doc.data().BP,
                this.Diabetes=doc.data().Diabetes,
                this.Weight=doc.data().Weight,
                this.Gender=doc.data().Gender
            
        })*/
        
    }

    addPatient = ()=>
    {
       //Alert.alert(this.props.userName)
            /*db.collection("Doctors").doc(this.props.Doc.UserName).collection('Patients').doc(this.props.userName).set({
                Name:this.Name,
                Age:this.Age,
                BP:this.BP,
                Diabetes:this.Diabetes,
                Weight:this.Weight,
                Gender:this.Gender
            })
            .then(function(docRef) {
                Alert.alert('You have been registered')
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            })*/
        //console.log(this.props.Doc.UserName,this.props.userName)
        //console.log('Patients------------------------------------------------------',db.collection("Doctors").doc(this.props.Doc.UserName).get().then((doc)=>doc.data().patients[0]))
        
        db.collection("Doctors").doc(this.props.Doc.UserName).get().then((doc)=>
        {
            
            if(doc.data().hasOwnProperty('patients'))
            {
                
                console.log("---------------------------------------------------------------------------",doc)
                var patientsArr = doc.data().patients
                if(doc.data().patients.length>0)
                {
                    db.collection("Doctors").doc(this.props.Doc.UserName).set({
                    patients:[...patientsArr,{
                        Name:this.props.UserName
                    }]
                    },{merge:true})
                    .then(function(docRef) {
                    Alert.alert('You have been registered')
                    })
                    .catch(function(error) {
                    console.error("Error adding document: ", error);
                    })
                }
                else
                {
                    db.collection("Doctors").doc(this.props.Doc.UserName).set({
                        patients:[{
                            Name:this.props.UserName
                        }]
                    },{merge:true})
                    .then(function(docRef) {   
                        Alert.alert('You have been registered')
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    })
                }
            }
            else
            {
                console.log("UserName on Doctor.js:",this.props.UserName)
                db.collection("Doctors").doc(this.props.Doc.UserName).set({
                    patients:[{
                        Name:this.props.UserName
                    }]
                  },{merge:true})
                  .then(function(docRef) {
                    Alert.alert('You have been registered')
                  })
                  .catch(function(error) {
                    console.error("Error adding document: ", error);
                  })
                  console.log(doc.data().hasOwnProperty('Name'))
            }
            /*
            var patientsArr = doc.data().patients
            if(doc.data().patients.length>0)
            {
                db.collection("Doctors").doc(this.props.Doc.UserName).set({
                  patients:[...patientsArr,{
                      Name:this.props.userName
                  }]
                },{merge:true})
                .then(function(docRef) {
                  Alert.alert('You have been registered')
                })
                .catch(function(error) {
                  console.error("Error adding document: ", error);
                })
            }
            else
            {
                db.collection("Doctors").doc(this.props.Doc.UserName).set({
                    patients:[{
                        Name:this.props.userName
                    }]
                  },{merge:true})
                  .then(function(docRef) {
                    Alert.alert('You have been registered')
                  })
                  .catch(function(error) {
                    console.error("Error adding document: ", error);
                  })
            }*/
        })
        
        
    

    }
    
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image source={logo} style={{height:100,width:100}} />
                </View>
                <View style={styles.mainInfo}>
                    <Text style={styles.name}>{this.props.Doc.Name}</Text>
                    <View style={styles.Speciality}>
                        <Text style={styles.qualification}>{this.props.Doc.Speciality}</Text>
                        <Text style={styles.qualification}>  ({this.props.Doc.Degree})</Text>
                    </View>
                   
                    <Text style={styles.Hospital}>{this.props.Doc.Hospital}</Text>
                    <TouchableOpacity style={styles.register}
                        onPress={this.addPatient}
                    >
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>  
                </View> 
               
            </View> 
           
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        backgroundColor:'white',
        width:'85%',
        padding:10,
        marginBottom:10,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row',
        elevation: 5
    },
    name:{
        color:'red',
        fontSize:20,
        fontWeight:'bold'
    },
    qualification:{
        color:'red',
        fontSize:10
    },
    register:{
        backgroundColor:'red',
        color:'white',
        textAlign:'center',
        padding:2,
        width:80

    },
    registerText:{
        color:'white',
        fontSize:15,
        textAlign:'center'
    },
    header:{
        flexDirection:'row'
    },

    mainInfo:{
        alignItems:'center',
        justifyContent:'space-around',
        flex:1
    },

    Speciality:{
        flexDirection:'row'
    },
    Hospital:{
        fontSize:15,
        color:'red'
    }
})
