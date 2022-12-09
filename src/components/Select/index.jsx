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

export function Select({ options, onChangeSelect, text, label }) {
  const [txt, setTxt] = useState(text)
  const [modalVisible, setModalVisible] = useState(false)
  const [selected, setSelected] = useState('')

  function renderOption(item) {
    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          { backgroundColor: item.id === selected ? '#eee' : '#fff' }
        ]}
        onPress={() => {
          onChangeSelect(item.id)
          setTxt(item.peso)
          setModalVisible(false)
          setSelected(item.id)
        }}
      >
        <Text
          style={[
            styles.optionTxt,
            { fontWeight: item.id === selected ? 'bold' : 'normal' }
          ]}
        >
          {item.peso}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <Text style={styles.label}>{label}</Text>
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
            <Text style={styles.modalTitle}>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}
