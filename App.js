import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionList from './src/Lists/SectionList'
import FlatList from './src/Lists/FlatList'

const App = () => {
  return (
    <View>
      <SectionList />
      <FlatList />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})