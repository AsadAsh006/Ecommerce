import { StyleSheet, Text, View, Image , FlatList, TouchableOpacityBase, TouchableOpacity, } from 'react-native'
import React,{useState,useEffect, } from 'react'
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'


const ProductList = ({navigation}) => {

  useEffect(() => {
    CategoryData()
    getData()
    getProductData()
  }, [])
      const [categories, setcategories] = useState([''])
      const [product, setProduct] = useState('')
      const [Store, setStore] = useState([''])
      const getData=async()=>{
          const Data = await fetch(`https://fakestoreapi.com/products`)
          const json= await Data.json()
          console.log("🚀 ~ getData ~ json:", json)
        
          
          setStore(json)
      };
          
      const CategoryData = async () => {
        const Data = await fetch('https://fakestoreapi.com/products/categories')
        console.log("🚀 ~ CategoryData ~ Data:", JSON.stringify(Data))
        const json = await Data.json()
        setcategories(json)
      }
  
      const getProductData=async()=>{
          const getProduct = await fetch(`https://fakestoreapi.com/products/1`) 
          const json = await getProduct.json()
          console.log("🚀 ~ getProductData ~ json:", JSON.stringify(json))
          setProduct(json) 
      }
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
      
      <Image source={require('../Image/G2.png')} style={{alignSelf:'center', marginTop:20}}/>
      <View>
     <Text style={{color:'red', marginLeft:20}}>{categories}</Text>
     </View>
      <FlatList
      
      numColumns={2}
     data={Store}
     renderItem={({item,index, })=>{
      return(
          <View style={{flex:1, backgroundColor:'white',}}>
              <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{id:item.id})}>
              <View style={{ margin:10, borderWidth:0.3,borderColor:'white', padding:5, elevation:1, width:'90%', borderBottomColor:'grey'}}>
              <Text style={{marginLeft:5, backgroundColor:'pink', borderRadius:5,marginTop:5,width:110 }}>{item.category}</Text>
              <Text style={{color:'white'}}>
                  {item.id}
              </Text>
            <Image source={{uri:item.image}} style={{height:200, width:150, alignSelf:'center'}}/>
              <Text>
                  {item.title}
              </Text>
              <Text style={{color:'green', backgroundColor:'cyan', opacity:1, width:75, borderRadius:5, }}>Rs {item.price}</Text>
              <View style={{flexDirection:'row', marginTop:10}}>
                  <Fontawesome5 name='shipping-fast' color={'blue'} size={20} style={{marginLeft:5}}/>
              <Text style={{marginLeft:7, color:'seagreen'}}>{item.rating?.count}</Text>
              <AntDesign name='star' color={'yellow'} size={20} style={{marginLeft:10}}/>
              <Text style={{color:'yellow'}}>{item.rating ?.rate}</Text>
              </View>
              
              </View>
              </TouchableOpacity>
          </View>
      )
     }}
      />
  
      </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
category:{
  marginLeft:20,
  
}

})