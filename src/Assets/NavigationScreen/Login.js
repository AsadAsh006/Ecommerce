import { StyleSheet, Text,Image, View , TouchableOpacity} from 'react-native'
import React from 'react'
import InputText from '../Components/InputText'
import CustomButton from '../Components/CustomButton'

const Login = () => {
  return (
    <View style={{backgroundColor:'white', flex:1,  }}>
      <View style={{justifyContent:"center",flex:0.5,alignItems:'center' }}>
        <Text style={{fontSize:40, color:'black', alignSelf:'center', }}>
         Welcome
        </Text>
        <Text style={{fontSize:40, color:'black', alignSelf:'center', fontWeight:'bold'}}>
          Back!
        </Text>
        </View>

<InputText Fontawesome6={true} intitle={'E-mail'}/>
<InputText Feather={true} intitle={'Password'} />
 

<TouchableOpacity style={{flex:0.1}}>
  <Text style={{alignSelf:'flex-end',marginRight:15 }}>
    Forgot Password ?</Text>
</TouchableOpacity>


 <CustomButton color={'red'} title={'Login'} widths={'55%'} />

  <Text style={{color:'black', alignSelf:'center',marginTop:20}}>
  Or
</Text>

<View style={{flexDirection:'row', alignItems:"center", justifyContent:"center",marginRight:20, flex:0.37}}>
<TouchableOpacity>
<Image source={require('../Image/Logo.png')} style={{width:60, height:60}}/>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../Image/Finger.png')} style={{height:40, width:40}}/>
</TouchableOpacity>
</View>
<View style={{ justifyContent:'center', flexDirection:'row',alignItems:"center"}}>
<Text style={{color:'black',fontSize:15 ,alignSelf:'center' , textAlign:'center', paddingLeft:60}}>
  Don't have an account?  
</Text>
<CustomButton title={'SignUp'} tcolor={'red'} twidth={70}/>
</View>
</View>
  )
}

export default Login

const styles = StyleSheet.create({})