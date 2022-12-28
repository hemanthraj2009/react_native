import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';


export const FocusHistory = ({history}) => {
    if(!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet! </Text>
    const renderItem = ({item}) => <Text style={styles.item}> - {item}</Text>
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Things to be focoused on: </Text>
        <FlatList data={history} renderItem={renderItem}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: spacing.md,
    },

    title: {
        fontSize: fontSizes.md,
        color: colors.white,
        fontWeight: 'bold',
    },
    item:{
        fontWeight: 'bold',
        fontSize: fontSizes.md,
        color: colors.white, 
        paddingTop: spacing.sm
    }
})