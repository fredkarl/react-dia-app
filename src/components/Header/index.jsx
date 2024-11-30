import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture
} from './styles';
import { Button } from '../Button';
import logo from '../../assets/logo-full.webp';

export function Header({autenticado}) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} height='25px' width='80px' alt="Logo Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer> 
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/19738752?v=4&size=64' />
          ) : (
            <>
            <MenuRight href="#">Home</MenuRight>
            <Button title='Entra' />
            <Button title='Cadastrar' />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}