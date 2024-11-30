import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { MdEmail, MdLock } from 'react-icons/md';

import { Column, Container, ErrorText, CreateText, ForgetText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { api } from '../../services/api';

const schema = yup.object({
  email: yup.string().email('Digite um e-mail válido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'Mínimo de 3 caracteres').required('Campo Obrigatório'),
}).required();

export function Login() {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1) {
        navigate('/feed');
      } else {
        alert('Email ou senha inválidos');
      }
    } catch (error) {
      alert('Houve um erro , tente novamente!')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faço seu Cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input errorMessage={errors?.email?.message} name='email' control={control} placeholder='e-mail' leftIcon={<MdEmail />}/>
              <Input errorMessage={errors?.password?.message} name='password' control={control} placeholder='senha' type='password' leftIcon={<MdLock />}/>
              <Button type='submit' title='Entrar' variant="secondary"/>
            </form>
            <Row>
              <ForgetText>Esqueci minha senha</ForgetText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}