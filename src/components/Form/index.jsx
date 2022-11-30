import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { styles } from './styles'

const schema = yup.object({
  carga: yup.number().required().positive('Informe a carga atual')
})

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver()
  })

  function handleSignIn(data) {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text>Carga:</Text>

      <Controller
        control={control}
        name="carga"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Carga Teste"
          />
        )}
      />

      <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}
