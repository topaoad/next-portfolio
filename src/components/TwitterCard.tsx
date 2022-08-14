import React, { FC } from 'react';
import { Avatar, Card, Group, Stack, Text } from '@mantine/core';

type Props = {
  data: Data;
  index: number;
};

type Data = {
  userImage: string;
  userName: string;
  userScreenName: string;
  date: string;
  tweet: string;
}

export const TwitterCard: FC<Props> = (props) => {
  return (
    <Card>
      <Group>
        <Avatar radius='xl' src={props.data.userImage} alt={props.data.userScreenName} />
        <Stack>
          <Group>
            <Text size='sm' weight={700}>{props.data.userScreenName}</Text>
            <Text size='xs' color='dimmed'>{`${props.data.userName}・${
              props.data.date
            }`}</Text>
          </Group>
          <Text size='sm' weight={500} >{props.data.tweet}</Text>
        </Stack>
      </Group>
    </Card>
  );
};
