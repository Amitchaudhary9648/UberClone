import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import DestinationSearchScreen from './src/screens/DestinationSearchScreen/DestinationSearchScreen'

const App = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'#a0abff'} />
      {/* <HomeScreen /> */}
      <DestinationSearchScreen />
    </View>
  )
}

export default App