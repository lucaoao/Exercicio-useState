import React, { useState } from 'react';
import Constants from 'expo-constants';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [array, setArray] = useState([]);

  function add() {
    if (item != '') {
      setArray([...array, item]);
      setItem('');
    } else {
      alert("Por favor, adicione um item.");
    }
  }

  return (
    <SafeAreaView style={estilo.container}>
      <TextInput
        style={estilo.caixa}
        placeholder="Item"
        value={item}
        onChangeText={(e) => setItem(e)}        //note to self: o (e) significa event, e não uma variável.
        onKeyPress={(e) => {
          if(e.key === 'Enter'){
            add();
          }
        }}
      />
      <Button color='#0f4c5c' title="Adicionar item" onPress={add} />
      <Text> </Text>
      <Button color='#9a031e' title="Limpar lista" onPress={() => setArray([])} />
      <Text> </Text>
      <Text style={estilo.font}> Minha lista: </Text>
      {array.map((element) => {
        return (
          <View>
            <Text style={estilo.font}>  > {element}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  caixa: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
    container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fb8b24',
  padding: 8,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
