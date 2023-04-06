import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const HomeSearch = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#535353'}/>
                </View>
            </View>

            {/* Previous Destination*/}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            {/* Home Destination*/}
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name={'home'} size={20} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    inputBox:{
        backgroundColor: '#e7e7e7',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    inputText:{
        fontSize: 20,
        fontWeight: '600',
        color: '#434343'
    },
    timeContainer:{
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20 ,
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb'
    },
    iconContainer:{
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25
    },
    destinationText:{
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 10,

    }
})

export default HomeSearch