import React from 'react'
import { TouchableOpacity, Button, View, Text } from 'react-native'

import { styles } from './styles'

export function SubmitButton() {
  const convertCurrentWeight = () => {
    alert('TEST')
  }

  return (
    <TouchableOpacity
      onPress={() => convertCurrentWeight()}
      activeOpacity={0.8}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>Converter</Text>
    </TouchableOpacity>
  )
}
