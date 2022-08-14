import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/icons/Layout';
import { Container, Divider, Text, Title } from '@mantine/core';
import { Blogs } from 'src/components/Blogs';

const BlogPage: NextPage = () => {
  return (
    <Layout content='Blog'>
      <Container>
        <Title align='left'>Blog</Title>
        <Divider mt='sm' />
        <Blogs />
        <Text color='dimmed'>未作業：ローディングアニメーション</Text>
      </Container>
    </Layout>
  );
};

export default BlogPage;
