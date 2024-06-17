import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignOptions from '../atom/SignOptions'

const LoginOptions = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.logInOptionsText}>Or use a social account to login</Text>
        <View style={styles.signInOptions}>
            <SignOptions />
        </View>
    </View>
  )
}

export default LoginOptions

const styles = StyleSheet.create({
    logInOptionsText: {
        color: '#646464',
        fontSize: 12,
        fontWeight: '700',
        marginTop: 40,
        marginBottom: 20
      },
    signInOptions: {
        flexDirection: 'row'
    },
    container:{
        alignItems: 'center'
    }
})