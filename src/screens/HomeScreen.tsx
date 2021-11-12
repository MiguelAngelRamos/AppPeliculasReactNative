import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const { top }  =  useSafeAreaInsets(); // para ios y android
  if(isLoading) {
    return(
      <View style={styles.loading}>
        <ActivityIndicator color="blue" size={80}/>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel */}
        <View style={{ height: 440 }}>
          <Carousel 
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item}/>}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.8}
          />
        </View>
        {/* Peliculas */}
        <HorizontalSlider title="Populares"  movies={popular} />
        <HorizontalSlider title="Top Rated"  movies={topRated} />
        <HorizontalSlider title="Upcoming"  movies={upcoming} />
        
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
