import { NativeBaseProvider } from 'native-base'
import { View, Text } from 'react-native'
import { Form } from '../Form'

export function FormContainer() {
  return (
    <NativeBaseProvider>
      <Form />
    </NativeBaseProvider>
  )
}
