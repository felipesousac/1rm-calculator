import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import { Select } from '../Select'

import { styles } from './styles'
import { SubmitButton } from '../SubmitButton'
import { NumberInput } from '../NumberInput'

const fakePeso = [
  {
    id: '1',
    peso: 'quilos'
  },
  {
    id: '2',
    peso: 'libras'
  }
]

export function Form() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Carga</Text>

      <NumberInput />

      <Select
        onChangeSelect={() => {}}
        text="Selecione a opção"
        options={fakePeso}
        label="Peso"
      />
      <Select
        onChangeSelect={() => {}}
        text="Selecione a opção"
        options={fakePeso}
        label="Número de repetiçõess"
      />
      <SubmitButton />
    </SafeAreaView>
  )
}
