import React from 'react';
import { Button, Container, Divider, Stack, Title } from '@mantine/core';
import styles from './GitHubSection.module.css';

export const GitHubSection = () => {
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
        <Title align='left'>GitHub</Title>
        <Divider mt='sm' />
        <Button radius='xl'>View on GitHub</Button>
      </Stack>
    </Container>
  );
};