import React from 'react';
// import styles from './PortfolioSection.module.css';
import { Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';

export const PortfolioSection = () => {
  return (
    <Container>
      <Stack>
        <Title align='left'>Portfolio</Title>
        <Divider mt='sm' />
        <LinkButton>View All</LinkButton>
      </Stack>
    </Container>
  );
};
