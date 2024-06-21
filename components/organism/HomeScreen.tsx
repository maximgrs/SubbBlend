import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SeeAllButton from '../atom/SeeAllButton';
import NavBar from '../atom/NavBar';
import CreateOwnShakeBox from '../molecule/CreateOwnShakeBox';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <NavBar />
        <CreateOwnShakeBox />
        <View style={styles.header}>
          <Text style={styles.textContent}>Best Mixes</Text>
          <SeeAllButton />
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

    },
    content: {
      padding: 20,
    },
    textContent: {
      fontSize: 20,
      marginLeft: 30,
      fontWeight: 'bold',
    },
    header:{
      marginTop: 60,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 25
    }
})