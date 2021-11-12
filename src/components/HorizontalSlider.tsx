import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}
const HorizontalSlider = ({ title, movies}: Props ) => {
  
  return (
    <View style={{ height: (title)? 260: 230}} >
      {
        // true && true
        title && <Text style={styles.titulo}>{title}</Text>
      }
      <FlatList 
        data={movies}
        renderItem={({ item }) => (<MoviePoster movie={item} width={140} height={200}/>)}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default HorizontalSlider

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10
  }
})
