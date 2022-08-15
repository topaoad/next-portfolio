import React from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';
import { Tweets } from './Tweets';
import { twitterUrl } from 'data/urlData';

export const TwitterSection = () => {
  return (
    <Container>
      <Stack spacing='lg'>
        <Title align='left'>Twitter</Title>
        <Divider mt='sm' />
        <Tweets />
        <Center>
          <a href={twitterUrl}>
            <LinkButton>View on Twitter</LinkButton>
          </a>
        </Center>
      </Stack>
    </Container>
  );
};
