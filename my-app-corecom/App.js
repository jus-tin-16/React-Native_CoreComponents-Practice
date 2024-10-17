import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyActivityIndicator from './MyActivities/MyActivityIndicator';
import MyButton from './MyActivities/MyButton';
import MyFlatList from './MyActivities/MyFlatList';
import MyImage from './MyActivities/MyImage';
import MyImageBackground from './MyActivities/MyImageBackground';
import MyKeyboardAvoidingComponent from './MyActivities/MyKeyboardAvoidingView';
import MyModal from './MyActivities/MyModal';
import MyPressable from './MyActivities/MyPressable';
import MyRefreshControl from './MyActivities/MyRefreshControl';
import MyScrollView from './MyActivities/MyScrollView';
import MySectionList from './MyActivities/MySectionList';
import MyStatusBar from './MyActivities/MyStatusBar';
import MySwitch from './MyActivities/MySwitch';
import MyText from './MyActivities/MyText';
import MyTextInput from './MyActivities/MyTextInput';
import MyTouchableHighlight from './MyActivities/MyTouchableHighlight';
import MyTouchableOpacity from './MyActivities/MyTouchableOpacity';
import MyTouchableWithoutFeedback from './MyActivities/MyTouchableWithoutFeedback';
import MyView from './MyActivities/MyView';
import MyVirtualList from './MyActivities/MyVirtualList';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<MyActivityIndicator/>*/}
      {/*<MyButton/>*/}
      {/*<MyFlatList/>*/}
      {/*<MyImage/>*/}
      {/*<MyImageBackground/>*/}
      {/*<MyKeyboardAvoidingComponent/>*/}
      {/*<MyModal/>*/}
      {/*<MyPressable/>*/}
      {/*<MyRefreshControl/>*/}
      {/*<MyScrollView/>*/}
      {/*<MySectionList/>*/}
      {/*<MyStatusBar/>*/}
      {/*<MySwitch />}*/}
      {/*<MyText />}*/}
      {/*<MyTextInput />*/}
      {/*<MyTouchableHighlight />*/}
      {/*<MyTouchableOpacity />*/}
      {/*<MyTouchableWithoutFeedback />*/}
      {/*<MyView />*/}
      {/*<MyVirtualList />*/}
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
