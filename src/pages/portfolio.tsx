import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/icons/Layout';
import { Container, Divider, Title } from '@mantine/core';
import { Portfolios } from 'src/components/Portfolios';

const PortfolioPage: NextPage = () => {
  return (
    <Layout content='Portfolio'>
      <Container>
        <Title align='left'>Portfolio</Title>
        <Divider mt='sm' />
        <Portfolios />
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
