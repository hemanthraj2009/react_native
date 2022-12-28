import React, { useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { colors } from '../utils/colors';
import {useKeepAwake} from 'expo-keep-awake';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import {ProgressBar} from 'react-native-paper';
import { Timings } from './Timings';



const ONE_SECOND_IN_MS = 1000

const PATTREN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
] 

export const Timer = ({focusSuject, clearSubject, onTimerEnd}) =>{
    useKeepAwake()
    const [isStarted, setisStart] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) =>{
        Vibration.vibrate(PATTREN);
        setisStart(false)
        setProgress(1)
        reset()
        onTimerEnd(focusSuject)
    }

    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd}/>
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>Focusing on: </Text>
                    <Text style={styles.task}>{focusSuject}</Text>
                </View>
            </View>
            <View style={{paddingTop: spacing.sm}}>
                <ProgressBar
                    progress={progress}
                    color={colors.progressbar}
                    style={{height: spacing.sm}}
                />
            </View>
            <View style={styles.timmerwrapper}>
                <Timings
                    onChangeTime={setMinutes}
                />
            </View>
            <View style={styles.buttonwrapper}>
                {!isStarted && (<RoundedButton title= "start" onPress={()=>setisStart(true)}/>)}
                {isStarted && (<RoundedButton title= "pause" onPress={()=>setisStart(false)}/>)}
            </View>
            <View style={styles.clearsubjectwrapper}>
                <RoundedButton size={50} title="-" onPress={clearSubject}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    clearsubjectwrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    countdown:{
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    buttonwrapper:{
        flex: 0.3,
        flexDirection: 'row',
        padding: spacing.xl,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: colors.white
    },
    title:{
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        textAlign: 'center'
    }, 
    timmerwrapper:{
        flex: 0.1,
        paddingTop: spacing.xxl,
        flexDirection: 'row'
    }
  });