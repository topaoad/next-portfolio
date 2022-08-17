import React, { FC } from 'react';
import { Container, Stack } from '@mantine/core';
import { blogData } from 'data/blogData';
import { BlogCard } from './BlogCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

type Props = {
  isHomePage: boolean;
};

export const Blogs:FC<Props> = ({isHomePage}) => {
  // ブログをいくつ表示するかどうか（モバイル表示かどうか、ホームページかどうかで異なる）
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numberToShow =
  isHomePage ? (isMobileUi ? 4 : 5) : isMobileUi ? 5 : 10;

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
