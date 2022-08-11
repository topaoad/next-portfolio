import React from 'react';
import { Button, Container, Divider, Stack, Title } from '@mantine/core';
import styles from './TwitterSection.module.css';

export const TwitterSection = () => {
  return (
    <Container className={styles.container}>
      <Stack
        spacing='lg'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Title align='left'>Twitter</Title>
        <Divider mt='sm' />
        <Button radius='xl'>View on Twitter</Button>
      </Stack>
    </Container>
  );
};