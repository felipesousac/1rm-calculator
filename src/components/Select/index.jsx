import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
  SafeAreaView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'

export function Select({ options, onChangeSelect, text }) {
  const [txt, setTxt] = useState(text)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.txt} numberOfLines={1}>
          {txt}
        </Text>
        <Icon name={'chevron-down'} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name={'chevron-left'} size={20} color={'#555'} />
            </TouchableOpacity>
            <Text>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}
