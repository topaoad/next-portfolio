import React, { FC } from 'react';
import { Card, Group, Stack, Text } from '@mantine/core';
import { StarIcon } from './icons/StarIcon';
import { GitForkIcon } from './icons/GitForkIcon';
import type { LanguageData } from './LanguageInfo';
import { LanguageInfo } from './LanguageInfo';

type Props = {
  data: Data;
};

type Data = {
  id: string;
  url: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  languages: LanguageData[];
};

export const GitHubCard: FC<Props> = (props) => {
  return (
    <Card>
      <Stack>
        <a href={props.data.url}>
          <Text size='lg' weight={700}>
            {props.data.name}
          </Text>
        </a>
        <Text size='sm' weight={500} lineClamp={2}>
          {props.data.description}
        </Text>
        <Group spacing='xs'>
          <StarIcon width={15} height={15} color='#909296' />
          <Text size='xs' color='dimmed'>
            {props.data.stars}
          </Text>
          <GitForkIcon width={15} height={15} color='#909296' />
          <Text size='xs' color='dimmed'>
            {props.data.forks}
          </Text>
        </Group>
        <LanguageInfo languages={props.data.languages} />
      </Stack>
    </Card>
  );
};
