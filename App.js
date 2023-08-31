import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Today's tasks </Text>
        <View style = {styles.items}>
        {/* This is where the tasks will go! */}
        <Task text = {'Task1'} />
        <Task text = {'Task2'}/>
        <Task />
        <Task />
        <Task />
        </View>
      </View>


      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} />
      </View>
    </View>

    



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    },
    tasksWrapper:{
      paddingTop: 15,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'

    }, 
    items: {
      marginTop:30,
    }, 
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius:60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,

    },
});
