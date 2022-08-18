import React, { FC } from 'react';
import { Card, Text, TypographyStylesProvider } from '@mantine/core';

type Props = {
  data: Data;
};

type Data = {
  id: string;
  title: string;
  content: string;
  siteUrl: string;
  createdAt: string;
};

export const BlogCard: FC<Props> = (props) => {
  return (
    <Card>
      <a href={props.data.siteUrl}>
        <Text size='lg' weight={700}>
          {props.data.title}
        </Text>
      </a>
      <TypographyStylesProvider>
        <Text size='sm' weight={500} lineClamp={2}>
          <div dangerouslySetInnerHTML={{ __html: props.data.content }} />
        </Text>
      </TypographyStylesProvider>
      <Text size='xs' color='dimmed'>
        {props.data.createdAt}
      </Text>
    </Card>
  );
};
