import { Button, FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {CustomInput, CustomModal} from "./components/index";
import React, {useState} from "react";

import { AntDesign } from '@expo/vector-icons';
import TaskScreen from "./screens/detailTask";
import WelcomeScreen from './screens/welcome';

var numTasks=0;

export default function App() {
  const [screenNumber,setScreenNumber]=useState();
  
  const onFirstScreen=(selectedScreen)=>{
    setScreenNumber(selectedScreen);
  }

  const homeScreen=(selectedScreen)=>{
    setScreenNumber(selectedScreen);
  }

  let content=<WelcomeScreen onFirstScreen={onFirstScreen}/>;
  if (screenNumber==1) {
    content=<TaskScreen/>
  }else if (screenNumber==0) {
    content=<WelcomeScreen/>
  }

  
  return(
    <SafeAreaView>
      {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDEF',
  },
  numComplete:{
    paddingLeft:20
  },
  numCompleteTitle:{
    color:'#409CA0',
    fontWeight:'bold'
  },
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
  taskListContainer: {
    flex: 1,
    marginVertical:20,
    marginHorizontal:20,
    backgroundColor:'#E6EDEF'
    
  },
  modalAll:{
    backgroundColor:'#B3C8D0',
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
    color:'#D90429',
    fontStyle:'italic' 

  }

});
