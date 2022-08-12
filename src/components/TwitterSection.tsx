import React from 'react';
import styles from './TwitterSection.module.css';
import { Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';

export const TwitterSection = () => {
  return (
    <Container className={styles.container}>
      <Stack spacing='lg'>
        <Title align='left'>Twitter</Title>
        <Divider mt='sm' />
        <LinkButton>View on Twitter</LinkButton>
      </Stack>
    </Container>
  );
};
