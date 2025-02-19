import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { Container, Divider, Space, Title } from '@mantine/core';
import { Portfolios } from 'src/components/portfolio/Portfolios';

const PortfolioPage: NextPage = () => {
  return (
    <Layout content='Portfolio'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          Portfolio
        </Title>
        <Divider mt='sm' />
        <Portfolios isHomePage={false} />
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
