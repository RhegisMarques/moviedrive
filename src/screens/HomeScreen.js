import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import TrendingMovies from "../components/TrendingMovie/TrendingMovies";
import axios from "axios";
import Loading from "../components/Loading";
import TopRatedMovies from "../components/TopRatedMovies";
import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await axios.get(fetchTrendingMovieUrl);
        setTrending(trendingResponse.data.results);

        const topRatedResponse = await axios.get(fetchTopRatedMovieUrl);
        setTopRated(topRatedResponse.data.results);

        const popularResponse = await axios.get(fetchPopularMovieUrl);
        setPopular(popularResponse.data.results);

        const upcomingResponse = await axios.get(fetchUpcomingMovieUrl);
        setUpcoming(upcomingResponse.data.results);

        const genresResponse = await axios.get(fetchGenresUrl);
        setGenres(genresResponse.data.genres);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []);

  const apiKey = "8b5bc2b85941792031b834e95b720f22";
  const baseUrl = "https://api.themoviedb.org/3";
  
  const fetchTrendingMovieUrl = `${baseUrl}/trending/movie/week?api_key=${apiKey}`;
  const fetchTopRatedMovieUrl = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;
  const fetchPopularMovieUrl = `${baseUrl}/movie/popular?api_key=${apiKey}`;
  const fetchUpcomingMovieUrl = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
  const fetchGenresUrl = `${baseUrl}/genre/movie/list?api_key=${apiKey}`;
  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/images/homescreen1.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
      <ScrollView className="mt-16">
        <StatusBar style="light" />

        {/* Título de boas-vindas */}

        <View className="flex-row justify-between items-center mx-4 mg-4">


          {/* Logo do app */}
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 200, // Ajuste o tamanho conforme necessário
              height: 30, // Ajuste o tamanho conforme necessário
            }}
            resizeMode="contain" // Use 'contain' para garantir que a imagem se ajuste ao tamanho especificado sem distorção
          />

          {/* Ícones de notificação e pesquisa */}
          <View className="flex-row space-x-4">
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>

          <View className="border-2 border-white rounded-full overflow-hidden">
            <TouchableOpacity onPress={() => navigation.navigate("Saved")}> 
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="cover"
            />
           </TouchableOpacity>
          </View>

        </View>

          {/* Cartão de filme */}

        {loading ? (
          <Loading />
        ) : (
          <ScrollView>
            {/* Filmes em tendência */}
            {trending.length > 0 && <TrendingMovies data={trending} />}

            {/* Filmes populares */}
            {popular.length > 0 && (
              <PopularMovie title="Populares" data={popular} />
            )}

            {/* Filmes mais bem avaliados */}
            {topRated.length > 0 && (
              <TopRatedMovies genre={genres} title="Mais Bem Avaliados" data={topRated} />
            )}

            {/* Em Cartaz */}
            {upcoming.length > 0 && (
              <UpcomingMovie title="Em Cartaz" data={upcoming} />
            )}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}
