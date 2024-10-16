import React, {useState} from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";

//FlatList renders basic flat lists that supports most handy features:
/*
-Fully cross-platform.
-Optional horizontal mode.
-Configurable viewability callbacks.
-Header support.
-Footer support.
-Separator support.
-Pull to Refresh.
-Scroll loading.
-ScrollToIndex support.
-Multiple column support.
*/

/*type ItemData = {
    id: string;
    title: string;
}*/

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

//FlatList-selectable
/*type ItemProps = {
    item:  ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color:  textColor}]}>
            {item.title}
        </Text>
    </TouchableOpacity>
);*/

const MyFlatList = () => {
   /* const [selectedId, setSelectedId] = useState<string>();
  
    const renderItem = ({item}: {item: ItemData}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    };*/
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />} keyExtractor={item => item.id} />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default MyFlatList;