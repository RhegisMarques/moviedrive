import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { image500 } from "../../utils/moviesapi";

const { width, height } = Dimensions.get("window");

export default function SavedScreen() {
  const navigation = useNavigation();
  const [savedMovies, setSavedMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadSavedMovies = async () => {
        try {
          const savedMovies = await AsyncStorage.getItem("savedMovies");
          const savedMoviesArray = savedMovies ? JSON.parse(savedMovies) : [];
          setSavedMovies(savedMoviesArray);
          console.log("Pull saved movie from AsyncStorage");
        } catch (error) {
          console.log(error);
        }
      };
      loadSavedMovies();
    }, [navigation])
  );

  const clearSavedMovies = async () => {
    try {
      await AsyncStorage.removeItem("savedMovies");
      setSavedMovies([]);
      console.log("Clear all saved movies");
    } catch (error) {
      console.log("Error clearing saved movies", error);
    }
  };

  return (
    <ScrollView>
      <View className="relative flex-1">
        <ImageBackground
          source={require("../../assets/images/homescreen.png")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        >
          <View className="mt-12 p-4">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-xl text-white">Sua Lista</Text>
              <TouchableOpacity
                onPress={clearSavedMovies}
                className="bg-black border-2 border-white py-2 px-4 rounded-lg"
              >
                <Text className="font-bold text-lg text-white">Clear</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-column justify-between flex-wrap">
              {savedMovies.map((movie, index) => (
                <View className="flex-row mt-4" key={index}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.push("Movie", movie)}
                    className="flex-row items-center"
                  >
                    <Image
                      source={{
                        uri: image500(movie.poster_path),
                      }}
                      className="rounded-3xl"
                      style={{
                        width: width * 0.41,
                        height: height * 0.25,
                      }}
                    />
                    <View className="ml-4">
                      <Text
                        className="text-gray-300 font-bold text-lg"
                        style={{ flexShrink: 1 }}
                      >
                        {movie.title && movie.title.length > 15
                          ? movie.title.slice(0, 15) + "..."
                          : movie.title}
                      </Text>
                      <Text className="text-gray-300 text-md">
                        {movie.release_date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
