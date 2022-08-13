import {Text, TouchableOpacity, View} from 'react-native-web';

import React from "react";
import { styles } from "./style";

const AddItem=({item,modalUno,modalDos})=>{
    return(
    <View style={styles.taskContainer}>
        <TouchableOpacity onPress={()=>modalUno(item.id)}>
            <Text style={styles.delete}><AntDesign name="checkcircleo" size={24} color="white" /></Text>
        </TouchableOpacity>
            <Text style={styles.item}>{item.value}</Text>
        <TouchableOpacity onPress={()=>modalDos(item.id)}>
            <Text style={styles.delete}><AntDesign name="closecircleo" size={24} color="white" /></Text>
        </TouchableOpacity>
    </View>
    )
}

