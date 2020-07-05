import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = ({title}) => {
    return (
        <View>
            <Text>Image Detail - {title}</Text> 
            <Image source={require('../../assets/beach.jpg')}/>       
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageDetail
