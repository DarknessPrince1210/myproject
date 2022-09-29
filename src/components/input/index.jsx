import {Button, TextInput, View} from "react-native";
import React, {useState} from "react";

import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-web";
import { TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import { styles } from "./style";

const CustomInput=({item,onChangeTask,placeholder,newTask,inputValue,onFirstScreen})=>{
    var selectedScreen=0;
    return(
    <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.home} onPress={()=>onFirstScreen(selectedScreen)} ><Entypo name="home" size={30} color='#4E717E'/></TouchableOpacity>
        <TextInput 
            style={styles.input} 
            placeholder={placeholder}
            value={item}
            onChangeText={onChangeTask}
            placeholderTextColor='#ccc'
        />
        <Button 
            title='Add' 
            color='#4E717E'
            onPress={newTask}
            disabled={inputValue===''}
        />  
     </View>
    )
}

export default CustomInput;