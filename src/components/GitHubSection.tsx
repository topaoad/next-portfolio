import React from 'react';
import styles from './GitHubSection.module.css';
import { Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';

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
        <LinkButton>View on GitHub</LinkButton>
      </Stack>
    </Container>
  );
};
