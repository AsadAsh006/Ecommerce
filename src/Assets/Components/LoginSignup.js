import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React , {useState, useEffect} from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Login from '../NavigationScreen/Login'
import SignUp from '../NavigationScreen/SignUp'
const LoginSignup = () => {
   
    const [signUp, setSignUp]=  useState(false)
    const [login, setLogin] = useState(true)
  return(
    <View style={{flex:1, backgroundColor:'white', paddingTop:30}}>
    <View style={{width:'95%',height:responsiveHeight(6.5), borderWidth:1, borderColor:'red', borderRadius:40, alignSelf:'center',}}>
    <View style={{flexDirection:'row',}}>
    <TouchableOpacity style={{height:responsiveHeight(6.5), width:'50%', backgroundColor:signUp?'red':null, borderRadius:40, justifyContent:'center'}} onPress={()=>{
        setSignUp(true)
        setLogin(false)}
   
    }>
    <Text style={{textAlign:'center', color:login? 'red':'white', fontSize:17, fontWeight:'800'}}>SignUp</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height:responsiveHeight(6.5), width:"50%", backgroundColor:login?'red':null, borderRadius:40, justifyContent:'center'}} onPress={()=>{
        setSignUp(false)
        setLogin(true)}}>
    <Text style={{textAlign:'center', color:signUp? 'red': 'white', fontSize:17, fontWeight:'800'}}>Login</Text>
    </TouchableOpacity>
    </View>
    </View>
{signUp && !login?
<SignUp/>:
<Login/>
}

    </View>
  )
}

export default LoginSignup

const styles = StyleSheet.create({})