/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Image from 'next/image';
import { Card, Text } from '@mantine/core';

type Props = {
  data: Data;
};

type Data = {
  id: string;
  title: string;
  description: string;
  siteUrl: string;
  imageUrl: string;
  dateFrom: string;
  dateTo: string;
};


export const PortfolioCard: FC<Props> = (props) => {
  return (
    <Card>
      <a href = {props.data.siteUrl}>
        <Image
          src={props.data.imageUrl}
          alt={props.data.title}
          width={358}
          height={184}
        />
      </a>
      <Text size='lg' weight={700}>
        {props.data.title}
      </Text>
      <Text size='sm' weight={500} lineClamp={2}>
        {props.data.description}
      </Text>
      <Text size='xs' color='dimmed'>
        {`${props.data.dateFrom} - ${props.data.dateTo}`}
      </Text>
    </Card>
  );
};
