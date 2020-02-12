import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'




    // pressHandler = () => {
    //     this.props.navigation.navigate('Details')
    // }

    
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      export default function App(navigation) {
        return (
            <View style={StyleSheet.container}>
                <View >
                <FlatList
        data={DATA}
        style={styles.list}
        renderItem={({ item }) => (
        <TouchableOpacity style={styles.Button}
        onPress={() => navigation.navigate('Details')}
        >
            <Text style={{fontSize:18,color:'white'}}>{item.title}</Text>
            
        </TouchableOpacity>)}
      /></View>
            </View>
        )
    }


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    Button:{
       backgroundColor:'blue',
       justifyContent:'center',
       alignItems:'center',
       marginBottom:10,

    },
    list:{
        flexDirection:'row',
        width:200,
        writingDirection:'ltr'
        
      //  justifyContent:"space-between"
    }
}
)
