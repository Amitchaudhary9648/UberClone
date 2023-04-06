import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CovidMessage = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}> kasjfkjskfj aajkfaj kfjs asdkfjaksdjf kalkflks adfasdkfjadskja sdjfkajsdkl fjaskldf;kasd jfkajsdf kjsfkljsadkljfksadf jaskl</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b80ff',
        padding: 15,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
    },
    title:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    text:{
        color: '#bed9ff',
        fontSize: 15,
        marginBottom: 10
    },
    learnMore:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default CovidMessage