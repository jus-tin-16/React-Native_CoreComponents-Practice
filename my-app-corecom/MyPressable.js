import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

//Presseble is a wrapper that can detect any press interactions on any of its defined children
//onPressIn when a press is activated
//onPressOut when a press is deactivated

const MyPressable = () => {
    const [timePressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timePressed > 1) {
        textLog = timePressed + 'x onPress';
    } else if (timePressed > 0) {
        textLog = 'onPress';
    }

    return (
        <View  style={styles.container}>
            <Pressable onPress={() => {
                setTimesPressed(current => current + 1);
            }}
            style={({pressed}) => [{backgroundColor: pressed ? 'rgb(210, 230,  255)' : 'white',},
                styles.wrapperCustom,
            ]}>{({pressed}) => (
                <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text> )}
            </Pressable>
            <View style={styles.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
});

export default MyPressable;