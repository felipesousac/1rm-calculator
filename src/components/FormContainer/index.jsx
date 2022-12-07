import { View, Text } from 'react-native'
import { Form } from '../Form'
import { styles } from './styles'

export function FormContainer() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  )
}
