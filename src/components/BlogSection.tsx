import React from 'react';
import { Button, Container, Divider, Stack, Title } from '@mantine/core';
import styles from './BlogSection.module.css';
import {
  Center,
  Container,
  Divider,
  Stack,
  Title,
} from '@mantine/core';
import { LinkButton } from './LinkButton';

export const BlogSection = () => {
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
        <Title align='left'>Blog</Title>
        <Divider mt='sm' />
            <LinkButton>View All</LinkButton>
      </Stack>
    </Container>
  );
};
