import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = () => {
    return (
        <View>
            <Text>Image Detail</Text> 
            <Image source={require('../../assets/beach.jpg')}/>       
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageDetail
