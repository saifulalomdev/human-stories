import { View,StyleSheet } from 'react-native'
import React from 'react'

export default function Form({children}: {children?: React.ReactNode}) {
  return (
    <View style={styles.form}>
        {children}
    </View>
  )
}


const styles = StyleSheet.create({
  form: {
    gap: 25,
  },
});