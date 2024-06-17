import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import NavBar from '../atom/NavBar';
import CreateOwnShakeBox from '../molecule/CreateOwnShakeBox';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <NavBar />
        <CreateOwnShakeBox />
        <Text style={styles.textContent}>Best Mixes</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      content: {
        padding: 20,
      },
      textContent: {
        fontSize: 18,
        marginLeft: 30,
      },
})