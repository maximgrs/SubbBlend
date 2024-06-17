import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const SignOptions = (icon:any) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.imageBorder}>
            <Image style={styles.image} source={require('../../assets/images/googleIcon.png')} />
        </View>
        <View style={styles.imageBorder}>
            <Image style={styles.image} source={require('../../assets/images/appleIcon.png')} />
        </View>
        <View style={styles.imageBorder}>
            <Image style={styles.image} source={require('../../assets/images/instagramIcon.png')} />
        </View>
    </TouchableOpacity>
  )
}

export default SignOptions

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        
    },
    imageBorder: {
        padding: 8,
        borderColor: '#AFAFAF', 
        borderWidth: 0.5,
        borderRadius: 6,
        marginHorizontal: 5
    }
})