import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window')

const SeeAllButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>See All</Text>
    </TouchableOpacity>
  )
}

export default SeeAllButton

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 30,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#3EC100'
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3EC100',
    }
})