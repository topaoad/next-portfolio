import React from 'react';
import { Container, Stack } from '@mantine/core';
import { blogData } from 'data/blogData';
import { BlogCard } from './BlogCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

export const Blogs = () => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numberToShow = isMobileUi ? 4 : 5;

  return (
    <Container fluid>
      <Stack spacing='xl'>
        {blogData.slice(0, numberToShow).map((blog) => (
          <BlogCard data={blog} key={blog.id} />
        ))}
      </Stack>
    </Container>
  );
};
