import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const {height, width} = Dimensions.get('window');

const SignInButton = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
    </View>
  )
}

export default SignInButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3EC100',
        width: width * 0.3,
        height: height * 0.053,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    text:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})