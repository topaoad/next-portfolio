import React, { FC } from 'react';
import { Paper, Text, TypographyStylesProvider } from '@mantine/core';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { BlogDataType } from 'data/blogData';

type Props = {
  data: BlogDataType;
};

export const BlogCard: FC<Props> = (props) => {
  return (
    <Paper>
      <AnchorSelf href={`/blog/${props.data.id}`}>
        <Text size='lg' weight={700}>
          {props.data.title}
        </Text>
      </AnchorSelf>
      <TypographyStylesProvider>
        <Text size='sm' weight={500} lineClamp={2}>
          <div dangerouslySetInnerHTML={{ __html: props.data.content }} />
        </Text>
      </TypographyStylesProvider>
      <Text size='xs' color='dimmed'>
        {props.data.createdAt}
      </Text>
    </Paper>
  );
};
