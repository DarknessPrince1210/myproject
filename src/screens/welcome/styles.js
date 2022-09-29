import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles=StyleSheet.create({
    container: {
        height:'100%',
        minHeight:1000,
        backgroundColor: colors.background,
    },
    header:{
        marginTop:25,
        height: 90,
        backgroundColor:colors.header,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
        
    },
    img:{
        width:340,
        height:'100%',
        
    },
    title:{
        color:'#F5F5F5',
        fontSize:20
    },
    mainBox:{
        height:'100%',
        padding: 50,
        backgroundColor:colors.background
    }
})