/* eslint-disable import/no-unresolved */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './style';
import logoImage from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImage} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="teste">Esqueci minha senha</a>
      </form>
      <a href="teste">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
