import { StyleSheet, Text, View, TextInput, Dimensions, Image, Platform} from 'react-native'
import Reactimport, { useState } from 'react'

const { height, width } = Dimensions.get('window')
const imageHeight = 20;

const InputField = ({title, placeholder}:{title:string, placeholder:string}) => {
    const [text, setText] = useState('')

    return (
        <View >
            <TextInput 
                style={styles.inputFieldBox}
                placeholder={placeholder}
                value={text}
                onChangeText={setText}
                autoCapitalize='none'
                keyboardType='default'
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    inputFieldBox: {
        color: '#000000',
        fontWeight: '400',
        width: width * 0.85,
        height: 50,
        backgroundColor: '#F3F3F3',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        paddingLeft: 30,
        marginBottom: 25
    },
    title: {
        color: '#8A8A8A',
        fontWeight: '600',
        position: 'absolute',
        top: -10,
        left: 30,
    }
})