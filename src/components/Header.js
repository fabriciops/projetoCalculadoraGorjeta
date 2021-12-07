import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.SafeAreaView`
    width:100%;
    height:60px;
    background-color:#CCC;
    justify-content:center;
    align-items:center;
`;

const HeadersText = styled.Text``;

export default () => {

    return (
        <Header>
            <HeadersText>Texto</HeadersText>
        </Header>
    );
}