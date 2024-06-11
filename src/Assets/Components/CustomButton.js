import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const CustomButton = (prop,{navigation}) => {
  return (
    <View style={{ justifyContent:'center', }}>
     <TouchableOpacity style={{backgroundColor:prop.color?prop.color:'white', borderWidth:prop.width? prop.width:null, height:prop.heights?prop.heights :responsiveHeight(6), width:prop.widths? prop.widths :responsiveWidth(45), borderColor:prop.bordcolor? prop.bordcolor:null, borderRadius:50, justifyContent:'center', alignSelf:'center', margin:prop.margins?prop.margins:null}}>
    <Text style={{fontSize:prop.fsize? prop.fsize:17, fontWeight:700, color:prop.tcolor? prop.tcolor:'white', textAlign:'center', width:prop.twidth?prop.twidth:null,}}>
    {prop.title? prop.title : null}
    </Text>
     </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})