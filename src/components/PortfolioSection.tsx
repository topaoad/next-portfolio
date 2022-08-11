import React from 'react';
import { Button, Container, Divider, Stack, Title } from '@mantine/core';
// import styles from './PortfolioSection.module.css';

export const PortfolioSection = () => {
  return (
    <Container>
      <Stack
        spacing='lg'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Title align='left'>Portfolio</Title>
        <Divider mt='sm' />
        <Button radius='xl'>View All</Button>
      </Stack>
    </Container>
  );
};
