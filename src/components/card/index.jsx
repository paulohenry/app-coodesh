import React,{useState, useEffect} from 'react';
import { View,Text,Image,Alert } from 'react-native';
import {OverflowMenu, MenuItem, Card as CardP, Modal} from '@ui-kitten/components'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'
import axios from '../../services/axios'
import EditModalContent from '../modalContentEdit'


const Card = ({data}) => {

  const[visibleMenu, setVisibleMenu]=useState(false)
  const[visibleModal, setVisibleModal]=useState(false)
  const[lines,setLines]=useState(true)
  const[stars, setStars]=useState([])
   

  const onDeleteApi = async ()=>{
    try{
      
      console.log(data.id)
      await axios.delete(`/products/${data.id}`)  
      setVisibleMenu(!visibleMenu)   
    }catch(err){
        console.log(err)
    }
  }

  const onPressEdit = ({index})=>{
    console.log(index)
    setVisibleModal(true)
    setVisibleMenu(!visibleMenu)
  }
  const onPressDelete = ()=>{
    onDeleteApi()
  }

  useEffect(()=>{     
      const array = []
      for (let index = 0; index < data.rating; index++) {
        array.push(index)      
      }
      setStars(array)
  },[])
  
  const Icon = ()=>(
    <Entypo 
    onPress={()=>setVisibleMenu(true)}
    name="dots-three-horizontal" 
    size={24} 
    color="black" />
  )

  return(
    <View style={styles.container}>
       <Image source={{uri:data && data.images[0].url}} style={styles.image}/>
     <View style={styles.containerDatas}>
        <View style={styles.containerLine}>
          <Text numberOfLines={1} style={styles.title}>
            {data && data.title}
          </Text>
         <OverflowMenu
            style={styles.menuOverflow}
            visible={visibleMenu}
            anchor={Icon}
            onBackdropPress={() => setVisibleMenu(false)}>  
          <MenuItem title="Editar" onPress={onPressEdit}/>
          <MenuItem title="Excluir" onPress={()=> onPressDelete(data.id)}/>          
         </OverflowMenu>
        </View>
       <View style={styles.containerContent}>
          <Text 
            styles={styles.description}
            numberOfLines={lines?1:4} 
            onPress={()=>setLines(!lines)}>
              <Text styles={{fontWeight:'bold'}}>Description:</Text>
              <Text>
               {data.description}
              </Text>
          </Text>
          <Text styles={styles.type}>Type: {data.type}</Text>
          <Text>Dimensions:</Text>
          <Text styles={styles.type}>width: {data.width}</Text>
          <Text styles={styles.type}>height: {data.height}</Text>
       </View>
       <View style={styles.containerLine2}>
         <View style={styles.containerStars}>
        {data.rating && 
          stars.map((index)=>{
            return (             
               <AntDesign  key={index} name="star" size={18} color="#E3C521" />
               )
          })
        }
        </View>
        <View>
          <Text styles={styles.price}>
              R$ 
           <Text> {data && data.price}</Text> 
          </Text>
        </View>     
       </View>
     </View>
     <Modal
        visible={visibleModal}        
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisibleModal(false)}>
        <View style={styles.modalContainer} disabled={true}>
         <EditModalContent data={data} />
        </View>
      </Modal>      
    </View>
  )
}

export default Card;