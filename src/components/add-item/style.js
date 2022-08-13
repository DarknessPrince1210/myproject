import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    taskContainer: {
        marginBottom:15,
        paddingHorizontal:20,
        paddingVertical:18,
        borderRadius:10,
        backgroundColor:'#81A4B1',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        elevation:2.8
        
      },
      item: {
        fontSize:18,
        color: '#EBEBEB',
        fontStyle:'italic'
        
      },
      delete:{
        color: '#EBEBEB',
        fontWeight:'bold',
        fontSize:20
    
      }
})
