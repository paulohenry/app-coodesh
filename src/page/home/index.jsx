import React,{useEffect, useState} from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import axios from '../../services/axios'
import Card from '../../components/card'


const Home = () => {

  const[data, setData]=useState()

  useEffect(() => {
     async function loadApi(){
      const response = await axios.get('/products')
      setData(response.data)      
     }
     loadApi()
  },[])

  return (
    <View style={styles.container}>
      
       <FlatList
         data={data}
         keyExtractor={item=> String(item.id)}
         renderItem={({item})=><Card data={item}/>}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'30%',  
    backgroundColor:'#F5C63D'
  }
});

export default Home;