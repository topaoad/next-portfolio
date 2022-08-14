import React from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';
import { Blogs } from './Blogs';
import { AnchorSelf } from './AnchorSelf';

export const BlogSection = () => {
  return (
    <Container>
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
