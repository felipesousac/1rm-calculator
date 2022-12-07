import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Select } from '../Select'

import { styles } from './styles'

const schema = yup.object({
  carga: yup
    .number('Somente números')
    .positive('Somente números positivos')
    .required('Informe a carga atual')
})

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data) {
    console.log(data)
  }

  return (
    <SafeAreaView style={styles.container}>
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
      {errors.carga && (
        <Text style={styles.labelError}>{errors.carga?.message}</Text>
      )}

      <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Select onChangeSelect={id => alert(id)} text="Selecione a opção" />
    </SafeAreaView>
  )
}
