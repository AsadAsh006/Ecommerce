import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import CustomButton from '../Components/CustomButton';
import { responsiveHeight, responsiveWidth , responsiveScreenHeight} from 'react-native-responsive-dimensions';

const ProductDetails = ({ route, navigation }) => {
  const {id} = route.params
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const getProductDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <View style={styles.container}>
      {productDetails ? (
        
        <View style={{flex:1}}>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Productlist')} style={styles.SimpleLineIcon} >
          <SimpleLineIcon name={'arrow-left'} color={'grey'} size={23} style={{alignSelf:'center', marginTop:10}}/>
          </TouchableOpacity>
          <Text style={styles.title}>{productDetails.title}</Text>
          <Image source={{ uri: productDetails.image }} style={styles.image} />
          <Text style={{color:'black', fontSize:17, fontWeight:'700', marginTop:15, borderBottomWidth:1, width:responsiveWidth(28), marginBottom:10, }}>Description</Text>
          <Text style={{color:'grey', width:responsiveWidth(98), }}>{productDetails.description}</Text>
          <Text style={styles.price}>Price: Rs {productDetails.price}</Text>
          
          <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', paddingTop:responsiveHeight(12)}}>
          <View style={{borderWidth:1, alignItems:'center',height:50, width:50, justifyContent:"center", borderRadius:10, marginRight:15}}>
          <Fontawesome name={'bookmark-o'} color={'grey'} size={30} style={styles.Icon}/>
          </View>
          <TouchableOpacity style={{backgroundColor:'red', height:"37%", width:'85%', alignItems:'center', justifyContent:'center', borderRadius:40, zIndex:5}}>
            <Text style={{fontSize:17 ,fontWeight:'bold', color:'white', }}>
              Buy Now
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={{flex:1, alignSelf:"center", }}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor: 'white',
    padding:5
  },
  title: {
    color:'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    shadowColor:"grey",
    alignSelf:'center',
    width: '55%',
    height: 270,
    marginBottom: 10,
  },
  price: {
    marginTop: 10,
    backgroundColor:'skyblue',
    fontWeight:'800',
    color:'white',
    width:'35%',
    borderRadius:4
  },
  SimpleLineIcon:{
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    alignItems:'center',
    borderColor:'grey',
    height:45,
    width:45,
    marginBottom:10,
  },
Icon:{

color:'grey',

}
});

export default ProductDetails;
