import React from "react";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

// RefreshControl is used inside ScrollView or ListView to add pull refresh functionality.
// When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.
const MyRefreshControl = () => {
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyRefreshControl;