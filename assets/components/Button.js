import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width


const Button = ({ text }) => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#5ff2d0',
    paddingVertical: 14,
    width: width / 2.6,
    borderRadius: 50
  },
  btnTextStyle: {
    color: '#2e2e2e',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
    textTransform: 'lowercase',
    fontWeight: '500'
  }
})

export default Button