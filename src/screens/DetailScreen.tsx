import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'


// no importa que tan grande es la pantalla siempre voy a tomar el 100% height
const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{

}
const DetailScreen = ({ route, navigation}: Props) => {
  // console.log(route.params)
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
 
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{ uri }}
            style={styles.posterImage}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text>{movie.original_title}</Text>
      </View>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight *0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden', // para que ningun hijo se salga de sus bordes
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1
  },
  marginContainer:{
    marginTop: 20,
    marginHorizontal: 20
  }
})
