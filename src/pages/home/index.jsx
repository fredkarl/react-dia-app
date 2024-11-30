import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, Titlehighlight } from './styles';
import banner from '../../assets/fundo.png';

export function Home() {
  const navigate = useNavigate();

  const handleClickSign = () => {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <Titlehighlight>
              Implemente <br />  
            </Titlehighlight>  
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os membros experts. 
          </TextContent>
          <Button title='Começar Agora!' variant='secondary' onClick={handleClickSign} />
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </Container>
    </>
  )
}