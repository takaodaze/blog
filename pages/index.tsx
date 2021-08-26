import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return <StyledDiv>index page</StyledDiv>;
};

const StyledDiv = styled.div`
  background: green;
  padding: 20px;
  color: white;
`;

export default Home;
