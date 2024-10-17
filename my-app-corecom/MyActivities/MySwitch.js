import React, {useState} from "react";
import {View, Switch, StyleSheet} from 'react-native';

//A controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions.
const MySwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch trackColor={{false: '#767557', true: '#81bff'}} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default MySwitch;