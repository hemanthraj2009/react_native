import  React, {useState} from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Focus } from './src/features/Focus'
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [currentsubject, setSubject] = useState(null)
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {
      !currentsubject ? 
        (
          <>
            <Focus addsubject={setSubject}/> 
            <FocusHistory history = {history}/>
          </>
        ) : 
        (<Timer 
          focusSuject = {currentsubject}
          onTimerEnd = {(subject) => {setHistory([...history, subject])}}
          clearSubject = {() => {setSubject(null)}}
        />)
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : spacing.zro,
    backgroundColor: colors.darkblue
  },
  text:{
    color: colors.white
  }
});
