import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  input:{
    height: 40,
    borderColor: 'gray', 
    alignItems:'center',
    borderWidth:1,
    borderRadius:6,
    paddingLeft:5,
    width:'100%',
    
  },
  inputMoney:{
    height: 40,
    alignItems:'center',
    width:'90%',
    
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title:{
    fontWeight:'bold',
    marginBottom:5
  },
  containerInput:{
    borderColor: 'gray',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    paddingLeft:5,
    marginBottom:10,
    borderRadius:6,
    height: 40,
  }
})
export default styles;