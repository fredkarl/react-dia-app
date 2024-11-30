import { FiThumbsUp } from 'react-icons/fi';
import { CardCointainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { useState } from 'react';

export function Card() {
  const [like, setlike] = useState(0);

  const handleLike = () => {
    setlike(prev => prev + 1);
  }

  return (
    <CardCointainer>
      <ImageBackground src='https://media.licdn.com/dms/image/v2/D4D16AQFS6u9fEtPrbA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1728692113666?e=1738195200&v=beta&t=qZRFR5l0E1E_EdqxWFwgmIez0HWB1LvK2f2WnP-qgNI' />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/19738752?v=4&size=64' />
          <div>
            <h4>Fred Karl</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bootcamp Dio do global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp onClick={handleLike}/> {like}
          </p>
        </HasInfo>
      </Content>
    </CardCointainer>
  )
}