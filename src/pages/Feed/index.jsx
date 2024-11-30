import { Header } from "../../components/Header";
import { Card } from '../../components/Card';

import { Container, Column, Title, TitleHighLight } from './styles';
import { UserInfo } from "../../components/UserInfo";

export function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># Ranking top 5 da Semana</TitleHighLight>
          <UserInfo image='https://avatars.githubusercontent.com/u/19738752?v=4&size=64' name='Fred Karl' percentual='80' />
          <UserInfo image='https://avatars.githubusercontent.com/u/19738752?v=4&size=64' name='Fred Karl' percentual='73' />
          <UserInfo image='https://avatars.githubusercontent.com/u/19738752?v=4&size=64' name='Fred Karl' percentual='65' />
          <UserInfo image='https://avatars.githubusercontent.com/u/19738752?v=4&size=64' name='Fred Karl' percentual='50' />
        </Column>
      </Container>
    </>
  )
}