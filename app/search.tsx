import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {useLocalSearchParams} from "expo-router";
import React, {useEffect} from "react";
import {useAppTheme} from "@/app/_layout";
import {Button, Searchbar} from "react-native-paper";
import CategoryList from "@/components/Home/CategoryList";

export default function SearchScreen() {
  const { query } = useLocalSearchParams< { query: string } >();
    const [searchQuery, setSearchQuery] = React.useState(query)
    const [currentCategory, setCurrentCategory] = React.useState("Business");
  const {
   colors
  } = useAppTheme();
  useEffect(() => {
    console.log(query)
  }, [query]);

  return (
    <View style={styles.container}>
      <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            backgroundColor: colors.background,
            opacity: 0.6,
            color:"#FFF",
            borderStyle: 'solid',
            borderColor:colors.primary,
            borderWidth: 0.5,
margin: 10,
          }}


  />
      <CategoryList
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
          withFilter
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
