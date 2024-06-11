import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomButton from '../Components/CustomButton'

const Both = () => {
  return (
    <View style={{flex:1, backgroundColor:'white', justifyContent:'center'}}>
    <View style={{flexDirection:'row', backgroundColor:'white',}}>
      <Image source={require('../Image/Cam.png')} style={{alignSelf:'flex-start', }}/>
      <Image source={require('../Image/Mobile.png')} style={{alignSelf:'center',}}/>
      <Image source={require('../Image/Earph.png')} style={{alignSelf:'flex-start',}}/>
    </View>

    <View style={{flex:1, backgroundColor:'red',borderTopLeftRadius:responsiveWidth(30), borderTopRightRadius:responsiveWidth(30),justifyContent:'center' }}>
    <Text style={{color:'white', fontSize:30, textAlign:'center',marginTop:30 }}>A Blend of all of your favourite electronics!</Text>
     <CustomButton title={'Login'} color={'red'} width={1} bordcolor={'white'}/>
     <CustomButton title={'SignUp'} color={'white'} bordcolor={'white'} tcolor={'red'}/>
     <CustomButton title={'SignUp'} color={'white'} bordcolor={'white'} tcolor={'red'}/>

    </View>
    </View>
  )
}

export default Both

const styles = StyleSheet.create({})