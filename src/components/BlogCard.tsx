import React, {FC} from 'react';
import { Card, Text } from '@mantine/core';
import { AnchorSelf } from './AnchorSelf';

type Data = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type Props = {
  data: Data;
};

export const BlogCard: FC<Props> = (props) => {
  return (
    <Card>
      <AnchorSelf href='/blog/${id}'>
        <Text size='lg' weight={700}>
          {props.data.title}
        </Text>
      </AnchorSelf>
      <Text size='sm' weight={500} lineClamp={2}>
        {props.data.content}
      </Text>
      <Text size='xs' color='dimmed'>{props.data.createdAt}</Text>
    </Card>
  );
};
