import React from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from './LinkButton';
import { Portfolios } from './Portfolios';
import { AnchorSelf } from './AnchorSelf';

export const PortfolioSection = () => {
  return (
    <Container>
      <Stack>
        <Title order={2} align='left'>Portfolio</Title>
        <Divider mt='sm' />
        <Portfolios />
        <Center>
          <AnchorSelf href='/portfolio'>
            <LinkButton>View All</LinkButton>
          </AnchorSelf>
        </Center>
      </Stack>
    </Container>
  );
};
