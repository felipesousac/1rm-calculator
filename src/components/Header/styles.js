import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND.HEADER,
    elevation: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 20,
    marginBottom: 15,
    marginTop: 40
  }
})
