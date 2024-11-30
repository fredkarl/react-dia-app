import { Container, NameText, UserPicture, Progress } from "./styles";

export function UserInfo ({ image, name, percentual }) {
  return (
    <Container>
      <UserPicture src={image}/>
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual}/>
      </div>
    </Container>
  )
}