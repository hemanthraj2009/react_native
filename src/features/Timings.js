import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";



export const Timings = ({onChangeTime}) =>{
    return (
        <>
            <View style={styles.timingsButton}>
                <RoundedButton title={10} size={75} onPress={()=>onChangeTime(10)}/>
            </View>
            <View style={styles.timingsButton}>
                <RoundedButton title={15} size={75} onPress={()=>onChangeTime(15)}/>
            </View>
            <View style={styles.timingsButton}>
                <RoundedButton title={20} size={75} onPress={()=>onChangeTime(20)}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingsButton: {
        flex: 1,
        alignItems: "center"
    }
})