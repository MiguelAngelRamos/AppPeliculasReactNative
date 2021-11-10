import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');
const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  if(isLoading) {
    return(
      <View style={styles.loading}>
        <ActivityIndicator color="blue" size={80}/>
      </View>
    )
  }
  return (
    <ScrollView>
      <View>
        <View>
          <Carousel 
            data={topRated}
            renderItem={({ item }: any) => <MoviePoster movie={item}/>}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})
