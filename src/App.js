import { AddItem, CustomInput, CustomModal } from "./components/index";
import { Button, FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from "react";

import { AntDesign } from '@expo/vector-icons';

var numTasks=0;

export default function App() {
  const[item,setTask]=useState('');
  const[taskList,setTaskList]=useState([{}]);
  const[taskSelected,setTaskSelected]=useState('');
  const[modalVision,setModalVision]=useState(false);
  const[modalVision_2,setModalVision_2]=useState(false);

  const inputvalue=item.trim();
  
  const onChangeTask=(text)=>{
    setTask(text);
  } 


  const addTask=()=>{
    if (item.trim
      ().length>0) {
      setTaskList([
        ...taskList,
        {
          id: taskList.length+1,
          value: item
        }
      ])
      setTask('');
    }
  }
  
const onDeleteTask=(id)=>{
  setTaskList(currentItems=>currentItems.filter(item=>item.id!==id));
  setTaskSelected('');
  setModalVision(!modalVision);
}

const onHandlerModal=(id)=>{
  setTaskSelected(taskList.find(item=>item.id===id));
  setModalVision(!modalVision);

}

const onHandlerModal_2=(id)=>{
  setTaskSelected(taskList.find(item=>item.id===id));
  setModalVision_2(!modalVision_2);

}

const onDeleteTask_2=(id)=>{
  setTaskList(currentItems=>currentItems.filter(item=>item.id!==id));
  setTaskSelected('');
  numTasks++;
  setModalVision_2(!modalVision_2);
}

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={()=>onHandlerModal_2(item.id)}>
        <Text style={styles.delete}><AntDesign name="checkcircleo" size={24} color="white" /></Text>
      </TouchableOpacity>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={()=>onHandlerModal(item.id)}>
        <Text style={styles.delete}><AntDesign name="closecircleo" size={24} color="white" /></Text>
      </TouchableOpacity>
    </View>

  )


  return (
    <View style={styles.container}>
     <CustomInput
      item={item}
      onChangeTask={onChangeTask}
      newTask={addTask}
      placeholder='New Task'
      inputValue={inputvalue}
     />
     <View style={styles.numComplete}><Text style={styles.numCompleteTitle}>Tareas completadas: {numTasks}</Text></View>
     <View style={styles.taskListContainer}>
      <FlatList 
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
     </View>
     <CustomModal animationType='fade' modalVision={modalVision} transparent>
        <View style={styles.modalAll}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Detalle de la tarea</Text>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalWarn}>😭¿Deseas eliminar la tarea?😭</Text>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTask}>{taskSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title='Eliminar' onPress={()=>onDeleteTask(taskSelected.id)} color='#6F8AB7'/>
            <Button title='Cancelar' onPress={()=>setModalVision(!modalVision)} color='#DFDEE3'/>
          </View>
        </View>
     </CustomModal>

     <CustomModal animationType='slide' modalVision={modalVision_2} transparent>
        <View style={styles.modalAll}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Detalle de la tarea</Text>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalWarn}>😻¡¡Completaste tu Tarea!!😻</Text>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTask}>{taskSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title='¡Vamos!' onPress={()=>onDeleteTask_2(taskSelected.id)} color='#6F8AB7'/>
            <Button title='Cancelar' onPress={()=>setModalVision_2(!modalVision_2)} color='#DFDEE3'/>
          </View>
        </View>
     </CustomModal>
     
     
    </View>
  );
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
