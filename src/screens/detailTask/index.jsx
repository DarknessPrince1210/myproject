import { Button, FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CustomInput, CustomModal } from '../../components/index';
import React,{useState} from "react";

import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

var numTasks=0;
const TaskScreen=()=>{
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
    <SafeAreaView style={styles.container}>
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
        <View style={styles.modalBox}>
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
        </View>
     </CustomModal>

     <CustomModal animationType='slide' modalVision={modalVision_2} transparent>
        <View style={styles.modalBox}>
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
        </View>
     </CustomModal>
     
     
    </SafeAreaView>
  );    
}

export default TaskScreen