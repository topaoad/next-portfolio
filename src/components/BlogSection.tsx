import React from 'react';
import styles from './BlogSection.module.css';
import {
  Center,
  Container,
  Divider,
  Stack,
  Title,
} from '@mantine/core';
import { LinkButton } from './LinkButton';
import { Blogs } from './Blogs';
import { AnchorSelf } from './AnchorSelf';

export const BlogSection = () => {
  return (
    <Container className={styles.container}>
      <Stack spacing='lg'>
        <Title align='left'>Blog</Title>
        <Divider mt='sm' />
        <Blogs />
        <Center>
          <AnchorSelf href='/blog'>
            <LinkButton>View All</LinkButton>
          </AnchorSelf>
        </Center>
      </Stack>
    </Container>
  );
};
