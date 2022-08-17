import React from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from 'src/components/common/LinkButton';
import { Blogs } from './Blogs';
import { AnchorSelf } from 'src/components/common/AnchorSelf';

export const BlogSection = () => {
  return (
    <Container>
      <Stack spacing='lg'>
        <Title order={2} align='left'>
          Blog
        </Title>
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
