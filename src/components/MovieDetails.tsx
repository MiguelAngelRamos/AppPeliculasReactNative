import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsinterface';
import { MovieFull } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
//yarn add -D @types/currency-formatter
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ( {movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
      <View style={{ flexDirection: 'row'}}>
        <Icon 
          name="star-outline"
          color="#cda434"
          size={18}
        />
        <Text> {movieFull.vote_average}</Text>
        <Text style={{ marginLeft: 5 }}>
          - { movieFull.genres.map( genero => genero.name).join(', ')}
        </Text>
      </View>
        {/* Historia  */}
      <Text style={styles.titulo}>
        Historia
      </Text>

      <Text style={{ fontSize: 16 }}>
        {movieFull.overview}
      </Text>


        {/* Presupuesto   */}

        <Text style={styles.titulo}>
          Prepuesto
        </Text>
        <Text style={{ fontSize: 18}}>
          { currencyFormatter.format(movieFull.budget, { code: 'USD'})}
        </Text>
      </View>



      {/* CASTING    */}
      <View style={{ marginTop: 10, marginBottom: 100}}>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
            Actores
        </Text>
        <FlatList
          data= {cast}
          keyExtractor= { (item) => item.id.toString()}
          renderItem={ ({item}) => <CastItem actor={item}/>}
          horizontal={true}
          style={{marginTop: 10, height: 70}}
          showsHorizontalScrollIndicator={false}
        />

      </View>

    </>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
  titulo: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold'
  }
})
