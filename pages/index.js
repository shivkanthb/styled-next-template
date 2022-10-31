import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Styled Next</title>
        <meta name="description" content="Conversational Understanding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>Hello World</Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  font-family: "Satoshi-Regular";
  font-size: 48px;
`;
