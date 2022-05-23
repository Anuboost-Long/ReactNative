import {StyleSheet,Text,View} from "react-native";
import React from "react";
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>ToDo today</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        alignItems:"center",
        height: 80,
        paddingTop: 30,
        backgroundColor:"#85DCBA"
    },
    title:{
        textAlign:"center",
        justifyContent:"center",
        fontWeight:"bold",
        fontSize:20,
    }
});