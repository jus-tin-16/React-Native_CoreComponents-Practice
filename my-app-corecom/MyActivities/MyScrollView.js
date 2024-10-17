import React from "react";
import { StyleSheet, Text, SafeAreaView,  ScrollView, StatusBar, SafeAreaViewComponent } from "react-native";

//ScrollView wraps the platform in scrolling state.
//ScrollView renders all its react child components at once, but this has a performance downside.
//While FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

const MyScrollView = () => {
    <SafeAreaViewComponent style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </ScrollView>
    </SafeAreaViewComponent>
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
});

export default MyScrollView;