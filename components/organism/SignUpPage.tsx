import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import SignTabs from '../molecule/SignTabs'
import InputField from '../atom/InputField'
import SignUpButton from '../atom/SignUpButton'
import LoginOptions from '../molecule/LoginOptions'

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      <SignTabs underlineState='Sign Up'/>

      <InputField title='Nickname' placeholder='Enter your nickname'/>
      <InputField title='Email Address' placeholder='Enter your email'/>
      <InputField title='Password' placeholder='Enter your password'/>
      <InputField title='Confirm Password' placeholder='Confirm your password'/>

      <SignUpButton />
      <LoginOptions />
    </View>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container:{
    alignItems: 'center'
  },
  image: {
    marginTop:100,
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
})