import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

import { styles } from './styles'

export function NumberInput() {
  const [number, setNumber] = useState('')

  const onChanged = text => {
    let newText = ''
    let numbers = '0123456789.'

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText += text[i]
      } else {
        alert('Digite somente números')
      }
    }
    setNumber(newText)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={text => onChanged(text)}
        value={number}
        placeholder="Digite a carga atual"
        maxLength={10}
      />
    </View>
  )
}
