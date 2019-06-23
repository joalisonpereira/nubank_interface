import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutText } from './styles';
import { PRIMARY_COLOR } from '~/styles';

export default function Menu({translateY}) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })  
    }}>
      <Code>
        <QRCode
          value="https://google.com"
          size={80}
          bgColor={"#FFF"}
          fgColor={PRIMARY_COLOR}
        />
      </Code>
      <Nav>
        {
          ITEMS.map((item,index) => 
            <NavItem key={index}>
              <Icon name={item.icon} size={20} color="#FFF"/>
              <NavText>{item.label}</NavText>
            </NavItem>
          )
        }
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutText>Sair da conta</SignOutText>
      </SignOutButton>
    </Container>
  );
}

const ITEMS = [
  { icon: 'help-outline', label: 'Me ajude' },
  { icon: 'person-outline', label: 'Perfil' },
  { icon: 'credit-card', label: 'Configurar cartão' },
  { icon: 'smartphone', label: 'Configurarações do app' }
]