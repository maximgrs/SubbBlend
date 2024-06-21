import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window')

const BottomTabicon = ({iconUrl, text}:{iconUrl:any, text:any}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Image style={styles.image} source={iconUrl}/>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabicon

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    image:{
        
    },
    text:{
        color: '#494949',
        textAlign: 'center',
        marginTop: 5
    },
    icon:{
        alignItems: 'center'
    }
})