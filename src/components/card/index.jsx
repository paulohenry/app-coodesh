import React from 'react';
import { View,Text,Image, StyleSheet } from 'react-native';


const Card = ({data}) => {
  return(
    <View style={styles.container}>
      <Text>{data.title}</Text>
      <Image source={{uri:'https://backend-coodesh.herokuapp.com/uploads/1604265259621-0.jpg'}} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:0,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex:1,
    height:'30%',
    width:'90%',
    borderWidth:1,
    backgroundColor:'#FFF'  
  },
  image:{
    width:350,
    height:200,
  }
});


export default Card;