import React from 'react'
import { View, Text , StyleSheet ,TextInput} from 'react-native'
import colors from '../config/colors'

export default function TextInputComp({placeholder ,handleChange ,...otherProps}) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={handleChange} style={styles.input} {...otherProps}  />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
       backgroundColor:colors.divider,
       width:'100%',
       padding:10,
       borderRadius:10,
       marginBottom:10,
   
    },
    input:{
        width:'100%'
    }
})