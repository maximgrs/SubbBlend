import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import * as Font from 'expo-font'

const { height, width } = Dimensions.get('window');

const loadFonts = async () => {
    await Font.loadAsync({
      'KaushanScript-Regular': require('../../assets/fonts/Kaushan_Script/KaushanScript-Regular.ttf')
    });
  };

const CreateOwnShakeBox = () => {
    React.useEffect(() => {
        loadFonts();
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.content}>  
            <View style={styles.boxContent}>
                <Text style={styles.heading}>Create{'\n'}your own</Text>
                <Text style={styles.description}>Choose between a variety of flavours and other supps</Text>
            </View>

            <Image style={styles.image} source={require('../../assets/images/bottle.png')}/>

            <View style={styles.button}>
                <Image style={styles.vector} source={require('../../assets/images/vectorRightArrow.png')}/>
            </View>  
        </View>
    </View>
  )
}

export default CreateOwnShakeBox

const styles = StyleSheet.create({
    container:{
        marginLeft: 'auto',
        marginTop: 35
    },
    content: {
        height: height * 0.45,
        width: width * 0.86,
        backgroundColor: '#A4D99B',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    description: {
        marginTop: 10,
        width: '45%',
        flexWrap: 'wrap',
        fontSize: 15,
        color: '#fff'
    },
    heading: {
        lineHeight: 40,
        fontFamily: 'KaushanScript-Regular',
        fontSize: 33,
        color: '#fff',
    },
    boxContent:{
        marginTop: 60,
        marginLeft: 40,
    },
    image:{
        position: 'absolute',
        top: 60,
        right: 20
    },
    button:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        width: '24%',
        height: '13.5%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    vector:{
        position: 'absolute'
    },
  });