import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <StatusBar style="light" />

      {/* Titulo e Botão */}
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 300, // Ajuste o tamanho conforme necessário
              height: 50, // Ajuste o tamanho conforme necessário
            }}
            resizeMode="contain" // Use 'contain' para garantir que a imagem se ajuste ao tamanho especificado sem distorção
          />
        </View>

        {/* Caixa de texto para o nome de usuário */}
        {/* <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        /> */}
        {/* Caixa de texto para o nome de senha */}
        {/* <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setUserpassword}
          value={userpassword}
        /> */}

        <TouchableOpacity
          style={styles.exploreButton}onPress={() => navigation.navigate("HomeTab")}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoBackground: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
  },
  logoText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  appName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#ff00d6",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
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
