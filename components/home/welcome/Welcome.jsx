import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import { router } from "expo-router";

const jobTypes = ["Full Time", "Part Time", "Remote"];
const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ivan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Search for jobs"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType === item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}}]`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
