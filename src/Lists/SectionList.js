import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionList = () => {

    const DATA = [
        { title: "FRUITS", data: ["kiwi", "apple", "banana"] },
        { title: "VEGES", data: ["tomato", "potato", "brinjl", "cabbage", "cauli flower"] },
        { title: "DRINKS", data: ["lemon juice", "mango shake"] },
        { title: "FOOD", data: ["chapati", "aloo curry", "fried rice", "fried aloo"] },
        { title: "SNACKS", data: ["maggie", "sandwich"] },
    ]

    const Item = ({ title }) => (
        <View>
            <Text style={{ backgroundColor: "yellow", color: "black" }}>{title}</Text>
        </View>
    )

    return (
        <View>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ backgroundColor: "pink", margin: 10, padding: 10 }}>{title}</Text>
                )}
            />
        </View>
    );
}

export default SectionList

const styles = StyleSheet.create({})