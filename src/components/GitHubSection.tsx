import React from 'react';
import styles from './GitHubSection.module.css';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';
import { GitHubRepos } from './GitHubRepos';

const githubUrl = 'https://github.com/pitang1965?tab=repositories';

export const GitHubSection = () => {
  return (
    <Container className={styles.container}>
      <Stack spacing='lg'>
        <Title align='left'>GitHub</Title>
        <Divider mt='sm' />
        <GitHubRepos />
        <Center>
          <a href={githubUrl}>
            <LinkButton>View on GitHub</LinkButton>
          </a>
        </Center>
      </Stack>
    </Container>
  );
};
