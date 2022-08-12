/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Image from 'next/image';
import { Card, Text } from '@mantine/core';

type Data = {
  id: string;
  title: string;
  description: string;
  siteUrl: string;
  imageUrl: string;
  createdAt: string;
};

type Props = {
  data: Data;
};

export const PortfolioCard: FC<Props> = (props) => {
  return (
    <Card>
      <Image
        src={props.data.imageUrl}
        alt={props.data.title}
        width={358}
        height={184}
      />
      <Text size='lg' weight={700}>
        {props.data.title}
      </Text>
      <Text size='sm' weight={500} lineClamp={2}>
        {props.data.description}
      </Text>
      <Text size='xs' color='dimmed'>
        {props.data.createdAt}
      </Text>
    </Card>
  );
};
