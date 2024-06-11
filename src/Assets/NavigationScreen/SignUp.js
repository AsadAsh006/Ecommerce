import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import InputText from '../Components/InputText'
import CustomButton from '../Components/CustomButton'

const SignUp = () => {
  return (

    <View style={{backgroundColor:'white', flex:1, }}>
    <View style={{justifyContent:"center",flex:0.5 }}>
      <Text style={{fontSize:40, color:'black', alignSelf:'center', }}>
        Lets get 
      </Text>
      <Text style={{fontSize:40, color:'black', alignSelf:'center', fontWeight:'bold'}}>
        Started!
      </Text>
      </View>
<InputText Fontawesome6={true} intitle={'Email'}/>

  <InputText Antdesign={true} intitle={'Username'}/>

   
   <InputText Feather={true} intitle={'Password'}/>
   <View style={{flex:0.5, marginTop:20}}>
<CustomButton title={'Create an account'} color={'red'} margins={20}/>
 


  </View>
<View style={{ paddingLeft:43,justifyContent:'flex-end', flexDirection:'row', }}>
<Text style={{color:'black',fontSize:15 ,alignSelf:'center',}}>
Already have  an account? 
</Text> 
<CustomButton title={'Login'} tcolor={'red'} twidth={60} fsize={17}/>


</View>




  </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})