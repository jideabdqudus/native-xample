import React from 'react'
import {Text, View, StyleSheet} from "react-native"

const ListScreen = () => {
    return (
        <View>
            <Text style={styles.text}>List Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
})

export default ListScreen
