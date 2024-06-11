import {TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
const InputText = (prop) => {
  return (
    <View style={{}}>
        <View style={{ alignItems:'center', flexDirection:'row', borderWidth:1, borderColor: prop.border ? prop.border :'red', width:responsiveWidth(90), height: prop.inheight? prop.inheight: responsiveHeight(6.5) ,alignSelf:'center',borderRadius:20, marginTop:5,margin:10 ,}}>
        {prop.Fontawesome6 ? <Fontawesome6 name='user' size={28} color={'red'} style={{margin:5}}/> :null}
        {prop.Antdesign ? <Antdesign name='idcard' size={28} color={'red'} style={{margin:5}}/>:null}
        {prop.Feather ? <Feather name={prop.Icon?prop.Icon:'lock'} size={28} color={'red'} style={{margin:5, opacity:prop.opacity?prop.opacity:null}} /> :null}
      <TextInput placeholderTextColor={prop.placeholdercolor? prop.placeholdercolor:'red'} placeholder={prop.intitle? prop.intitle:'Enter Your Email Address'} />
     {prop.IonIcon? <IonIcon name='eye-outline' size={28} color={'grey'} style={{margin:5}}/>:null}
      </View>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})