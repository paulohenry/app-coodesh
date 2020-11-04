import React,{useEffect, useState} from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import axios from '../../services/axios'
import Card from '../../components/card'


const Home = () => {

  const[data, setData]=useState([])
  const [refreshing, setRefreshing] = useState(true);

  const loadApi = async ()=> {
    try{
    const response = await axios.get('/products')
    setRefreshing(false);
    setData(response.data)
    }catch(err){
     
    }     
   }

  const onRefresh = () => {
    loadApi();    
  };
  useEffect(() => {     
     loadApi()
  },[])

  return (
    <View style={styles.container}>      
       <FlatList
         data={data}
         extraData={refreshing}
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}            
            />
         }
         keyExtractor={item => String(item.id)}
         renderItem={({item})=>
            <Card 
              data={item} 
              customRefresh={()=>onRefresh()}/> }/>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#FFF'
  }
});

export default Home;