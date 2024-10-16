import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyActivityIndicator from './MyActivityIndicator';
import MyButton from './MyButton';
import MyFlatList from './MyFlatList';
import MyImage from './MyImage';
import MyImageBackground from './MyImageBackground';
import MyKeyboardAvoidingComponent from './MyKeyboardAvoidingView';
import MyModal from './MyModal';
import MyPressable from './MyPressable';
import MyRefreshControl from './MyRefreshControl';

export default function App() {
  return (
    <View style={styles.container}>
      <MyRefreshControl />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
