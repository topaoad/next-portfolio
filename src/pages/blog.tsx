import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import {
  Center,
  Container,
  Divider,
  Loader,
  Space,
  Title,
} from '@mantine/core';
import { Blogs } from 'src/components/blog/Blogs';

const BlogPage: NextPage = () => {
  return (
    <Layout content='Blog'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          Blog
        </Title>
        <Divider mt='sm' />
        <Blogs isHomePage={false} />
        <Center>
          <Loader color='red' />
        </Center>
      </Container>
    </Layout>
  );
};

export default BlogPage;
