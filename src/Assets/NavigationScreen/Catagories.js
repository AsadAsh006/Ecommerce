import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputText from '../Components/InputText'

const Catagories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const json = await response.json();
      console.log("Fetched categories:", JSON.stringify(json)); // Debug: Log fetched data
      setCategories(json);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image source={require('../Image/G2.png')} style={{ alignSelf: "center", marginTop: 10 }} />
      <InputText inheight={40} intitle={'Search'} border={'grey'} Feather={true} Icon={'search'} opacity={0.4} />
      
      <View style={styles.container}>
        <FlatList
        style={{ flexDirection:'row'}}
        showsVerticalScrollIndicator
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

export default Catagories;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 10,
  },
  list: {
    flex:1,
    paddingBottom: 10,
    flexDirection:'row',
   flexWrap:'wrap'
    
  },
  categoryContainer: {
    borderWidth:1,
    padding:15,
    borderColor:'grey',
    flexDirection:'row',
  margin:10,
 borderRadius:50,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  categoryText: {
   
    fontSize: 16,
    color: 'black',
   
  },
});
