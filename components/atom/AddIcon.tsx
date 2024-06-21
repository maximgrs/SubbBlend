import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AddIcon = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Image style={styles.image} source={require('../../assets/images/BottomNavIcons/plus.png')}/>
        </TouchableOpacity>
    </View>
  )
}

export default AddIcon

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: -18
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#B4F16C',
        borderRadius: 100,
    },
    image:{
    }
})