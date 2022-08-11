import React from 'react';
import { Button, Container, Divider, Stack, Title } from '@mantine/core';
import styles from './BlogSection.module.css';

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
        <Button radius='xl'>View All</Button>
      </Stack>
    </Container>
  );
};
