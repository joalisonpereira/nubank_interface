import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { 
  Container, Content, Card, CardHeader, CardContent, 
  CardFooter, Title, Description, Annotation 
} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {
  const translateY = new Animated.Value(0)
  const [openMenu, handleOpen] = useState(false) 
  let offset = 0;

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  );
  
  function onHandlerStateChange(e){
    if(e.nativeEvent.oldState === State.ACTIVE){
      const { translationY } = e.nativeEvent
      let open = false
      offset += translationY

      if(translationY >= 100){
        open = true
      }else{
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: open ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = open ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header 
        translateY={translateY} 
        openMenu={openMenu} 
        handleOpen={handleOpen}
      />
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler 
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666"/>
              <Icon name="visibility-off" size={28} color="#666"/>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 197.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebida de João Augusto hoje às 06:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY}/>
    </Container>
  );
}
