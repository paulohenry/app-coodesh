import React,{useState, useEffect} from 'react';
import {View,Text,TextInput} from 'react-native';
import {Button, Spinner} from '@ui-kitten/components'
import styles from './styles';
import axios from '../../services/axios'

const ModalEdit = ({data, customRefresh, onTouchCancel}) => {

  const[loading, setLoading]=useState(false)
  const[title, setTitle]=useState('')
  const[price, setPrice]=useState('')
  const[type, setType]=useState('')

  const loadApi = async ()=>{
    setLoading(true)
   
    try{
      await axios.put(`/products/${data.id}`,
      {
        title:title,
        type:type,
        price:parseInt(price)
      })      
      
    }catch(err){
      
    }
    setLoading(false)
    onTouchCancel()
    customRefresh()
  }

  useEffect(()=>{
    setTitle(data.title)
    setPrice(data.price)
    setType(data.type)
  },[])
  
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size='small'/>
    </View>
  );

  return (
    <View>
        <View >
         <Text style={styles.title}>Title:</Text>
         <TextInput 
            onChangeText={ text =>setTitle(text)} 
            style={styles.input} 
            value={title}/>
        </View>
        <View >
         <Text style={styles.title}>Type:</Text>
         <TextInput 
            onChangeText={ text =>setType(text)} 
            style={styles.input} 
            value={type}/>
        </View>
        <View>
         <Text style={styles.title}>Price:</Text>
         <View style={styles.containerInput}>
         <Text>R$ </Text>
         <TextInput 
              style={styles.inputMoney}
              onChangeText={text =>setPrice(text)} 
              keyboardType="numeric"
              value={price}/>
         </View>
        </View>
        <Button
            appearance='outline' 
            onPress={()=>{loadApi()}} 
            accessoryLeft={loading && LoadingIndicator}>
          {!loading && <Text>Alterar</Text>}
        </Button>
     </View>
  );
}

export default ModalEdit;