import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItemContainer, TabItem, TabTitle } from './styles';

export default function Tabs({translateY}) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp'
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp'
      })  
    }}>
      <TabsContainer>
          {
          TABS.map((item, index) => 
            <TabItemContainer key={index}>
              <TabItem>
                <Icon name={item.icon} size={24} color="#FFF"/>
                <TabTitle>{item.title}</TabTitle>
              </TabItem>
            </TabItemContainer>
          )
        }
      </TabsContainer>
    </Container>
  );
}

const TABS = [
  { icon: 'person-add', title: 'Indicar amigos' },
  { icon: 'chat-bubble-outline', title: 'Cobrar' },
  { icon: 'arrow-downward', title: 'Depositar' },
  { icon: 'arrow-upward', title: 'Transferir' },
  { icon: 'lock', title: 'Bloquear cartão'}
]