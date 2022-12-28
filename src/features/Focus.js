import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

export const Focus = ({addsubject}) => {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <TextInput style={styles.textinput} onChangeText={setSubject} label="What you like to focus on?" />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addsubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1, 
  },
  textinput:{
    flex: 0.9,
    marginRight: spacing.sm
  },
  button:{
    justifyContent: 'center'
  },
  textcontainer: {
    flexDirection: 'row',
    padding: spacing.lg
  },
  text: {
    color: colors.white,
  },
});