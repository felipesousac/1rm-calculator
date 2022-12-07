import { View, Text, SafeAreaView } from 'react-native'

import { styles } from './styles'

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>1RM Calculator</Text>
    </SafeAreaView>
  )
}
