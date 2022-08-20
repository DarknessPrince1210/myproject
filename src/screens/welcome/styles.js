import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles=StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: colors.background,
    },
    header:{
        marginTop:25,
        height: 80,
        backgroundColor:colors.header,
        padding:20,
        alignItems:'center',
        
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