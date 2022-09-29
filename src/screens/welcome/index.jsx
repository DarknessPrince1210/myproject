import { Button, FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CustomInput, CustomModal } from '../../components/index';
import React,{useState} from "react";

import { AntDesign } from '@expo/vector-icons';
import colors from "../../constants/colors";
import { styles } from "./styles";

const WelcomeScreen=({onFirstScreen})=>{
    
    var selectedScreen=1;
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            {/* <Text style={styles.title}>Studygram</Text> */}
            <Image source={require('../../../assets/studygram_horizontal.png')} style={styles.img}/>
        </View>
        <View style={styles.mainBox}>
            <Button 
            title="Task List"
            color={'#4E717E'}
            onPress={()=>onFirstScreen(selectedScreen)}
            />
        </View>
    </SafeAreaView>
  );    
}

export default WelcomeScreen