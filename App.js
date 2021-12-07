import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import Header from './src/components/Header';
// import swal from 'sweetalert';

const PageOne = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px;
  color: white;
  
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

const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
`;

const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:5%;
`;

const PctArea = styled.View`
  flex-direction:row;
  margin:2%;
`;

const PctItem = styled.Button`
  margin:10px;
`;

const KeyBoadArea = styled.KeyboardAvoidingView`
  width:100%;
  flex:1;
  background-color:#1C1C1C;
  justify-content:center;
  align-items:center;
`;

const Page =  styled.SafeAreaView`
  flex:1;
`;

export default function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip(pct/100 * bill);
    }
  }

  useEffect(() => {
    calc()
  }, [pct]);

  // useEffect(() => {
  //   alert("SO " + Platform.OS)
  // }, []);

  return (

    <PageOne>
      <Header></Header>
      <KeyBoadArea behavior={Platform.OS=='ios'?'padding':null}>
        <HeaderText >Calculadora de Gorjeta</HeaderText>
        <Input
          placeholder="Valor da Conta"
          placeholderTextColor="#FFF"
          keyboardType="numeric"
          value={bill}
          onChangeText={n=>setBill(n)}
        />
        <PctArea>
          <PctItem title='5%'  onPress={()=>setPct(5)}></PctItem>
          <PctItem title='10%' onPress={()=>setPct(10)}></PctItem>
          <PctItem title='15%' onPress={()=>setPct(15)}></PctItem>
          <PctItem title='20%' onPress={()=>setPct(20)}></PctItem>
        </PctArea>
        <CalcButton title={`Calcular ${pct}%`} onPress={calc}/>
        {tip > 0 &&
          <ResultArea>

            <ResultItemTitle>Valor da Conta</ResultItemTitle>  
            <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

            <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>  
            <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

            <ResultItemTitle>Valor da Total</ResultItemTitle>  
            <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>

          </ResultArea>
        }
        </KeyBoadArea>
    </PageOne>
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
