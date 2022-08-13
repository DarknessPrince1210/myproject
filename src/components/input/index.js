import {Button, TextInput, View} from "react-native";

import React from "react";
import { styles } from "./style";

const CustomInput=({item,onChangeTask,placeholder,newTask,inputValue,placeholderColor})=>{
    return(
    <View style={styles.inputContainer}>
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