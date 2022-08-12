import React from 'react';
import styles from './BlogSection.module.css';
import { Container, Stack } from '@mantine/core';
import { blogData } from 'data/blogData';
import { BlogCard } from './BlogCard';

export const Blogs = () => {
  return (
    <Container fluid>
      <Stack spacing='xl' className='styles.container'>
        {blogData.slice(0, 4).map((blog) => <BlogCard data={blog} key={blog.id} />)}
      </Stack>
    </Container>
  );
};
