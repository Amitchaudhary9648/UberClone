import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeMap = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>HomeMap</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#a0abff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeMap