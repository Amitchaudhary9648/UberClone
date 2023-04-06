import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const DestinationSearchScreen = (): JSX.Element => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder={'From'}/>
                <TextInput style={styles.textInput} placeholder={'Where To?'}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    textInput:{
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5
    }
})

export default DestinationSearchScreen 