import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  // Simulando o nome do usuário
  const username = "Ryan Gosling";

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <StatusBar style="light" />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        {/* Imagem circular */}
        <View style={styles.circleContainer}>
          <Image
            source={require("../../assets/images/avatar.png")} // Substitua pelo caminho da sua imagem
            style={styles.circleImage}
          />
          <Text style={styles.username}>{username}</Text>
        </View>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("HomeTab")}
        >
          <Text style={styles.exploreButtonText}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          Descubra sua próxima obsessão cinematográfica.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  logoImage: {
    width: 300,
    height: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  username: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "#ff00d6",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  exploreButton: {
    backgroundColor: "#ff00d6",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  exploreButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
