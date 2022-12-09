import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    color: '#555',
    fontSize: 13,
    paddingLeft: 20,
    paddingVertical: 10
  },
  txt: {
    color: '#555',
    fontSize: 16
  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  modalTitle: {
    fontSize: 18,
    color: '#555'
  },
  modalCancel: {
    fontSize: 14,
    color: 'blue'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 10
  },
  optionTxt: {
    fontSize: 16,
    color: '#555'
  }
})
