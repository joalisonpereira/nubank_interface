import styled from 'styled-components/native';
import { PRIMARY_COLOR } from '~/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${PRIMARY_COLOR};
  padding-top: ${getStatusBarHeight()}px;
`;
