import React from 'react';
import { Container, Top, Logo, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo}/>
        <Title>Joalison</Title>
      </Top>
      <Icon 
        size={20} 
        color={"#FFF"}
        name="keyboard-arrow-down" 
      />
    </Container>
  );
}
