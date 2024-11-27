import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, Pressable} from 'react-native';

interface Item {
  id: number;
  img: string;
  title: string;
}

interface HorizontalFlatListProps {
  data: Item[];
}

const HorizontalFlatList: React.FC<HorizontalFlatListProps> = ({data}) => {
  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.item}>
      <Pressable>
        <Image source={{uri: item.img}} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={data || []}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<Text style={styles.emptyText}>暂无数据</Text>}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex:1,
    width: 150,
    height: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default HorizontalFlatList;
