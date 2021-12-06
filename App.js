import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
// import swal from 'sweetalert';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px
`;

const Input = styled.TextInput`
  width:90%;
  height:40px;
  font-size:18px;
  background-color:#00BFFF;
  margin-top:20px;
  margin-bottom:20px;
  border-radius:10px;
  padding:10px;
`;

const CalcButton = styled.Button`
  margin-top:100px;
`;

const ResultArea = styled.View`
  margin-top:30px;
  background-color:#00BFFF;
  padding: 20px;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  width: 65%;
`;

export default function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip ( nBill * 0,1);
    }else{
      alert("Digite o Valor da conta");
    }
  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Valor deu Conta"
        placeholderTextColor="#FFF"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
      <CalcButton title="Calcular" onPress={calc}/>
      <ResultArea>

      </ResultArea>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
