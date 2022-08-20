import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles=StyleSheet.create({
      container: {
        height:'100%',
        backgroundColor: colors.background,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop:40,
        paddingHorizontal: 20,
      },
      input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: colors.input,
        marginVertical: 20,
      },
      numComplete:{
        paddingLeft:20
      },
      numCompleteTitle:{
        color:colors.completeTasks,
        fontWeight:'bold'
      },
      taskContainer: {
        marginBottom:15,
        paddingHorizontal:20,
        paddingVertical:18,
        borderRadius:10,
        backgroundColor:colors.task,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        elevation:2.8
        
      },
      item: {
        fontSize:18,
        color: colors.text,
        fontStyle:'italic'
        
      },
      taskListContainer: {
        flex: 1,
        marginVertical:20,
        marginHorizontal:20,
        backgroundColor:colors.background
        
      },
      modalAll:{
        backgroundColor:colors.modalBox,
        height: 310,
        width: 345,
        opacity:10,
        marginTop:150,
        borderRadius:40,
        marginLeft:7
        
      },
      modalContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20
        
    
      },
      modalTitle:{
        fontSize:18,
        fontWeight:'200',
        marginTop:20
      },
      modalButton:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:50,
        marginVertical:20
    
      },
      modalTask:{
        marginVertical:2,
        fontWeight:'bold',
        color:colors.importantText,
        fontStyle:'italic' 
    
      }
})
