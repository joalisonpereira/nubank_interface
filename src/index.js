import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';
import { PRIMARY_COLOR } from '~/styles'

import Routes from '~/routes';

const App = () => 
  <>
    <StatusBar barStyle='light-content' backgroundColor={PRIMARY_COLOR}/>
    <Routes/>
  </>


export default App;
