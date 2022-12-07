import { View, Text } from 'react-native'
import { Form } from '../Form'
import { FormContainer } from '../FormContainer'

import { styles } from './styles'

export function Body() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  )
}
