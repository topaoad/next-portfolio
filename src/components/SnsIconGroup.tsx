import React from 'react';
import { ActionIcon, Group } from '@mantine/core';

import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { RssIcon } from './icons/RssIcon';

export const SnsIconGroup = () => {
  return (
    <Group position='center' spacing='xs'>
      <ActionIcon variant='transparent'>
        <TwitterIcon />
      </ActionIcon>
      <ActionIcon variant='transparent' color='yellow'>
        <FacebookIcon />
      </ActionIcon>
      <ActionIcon variant='transparent' color='yellow'>
        <RssIcon />
      </ActionIcon>
    </Group>
  );
};
