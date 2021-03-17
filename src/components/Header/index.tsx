import logoDtmoney from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoDtmoney} alt="dt money"/>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};