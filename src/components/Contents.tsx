import React from 'react';
import { Container, Grid, Stack } from '@mantine/core';
import { TitleSection } from 'src/components/TitleSection';
import { BlogSection } from './BlogSection';
import { PortfolioSection } from './PortfolioSection';
import { GitHubSection } from './GitHubSection';
import { TwitterSection } from './TwitterSection';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

export const Contents = () => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  return (
    <Container>
      <Stack
        spacing='lg'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
        })}
      >
        <TitleSection name='ピータン' />
        <BlogSection />
        <PortfolioSection />
        <Grid>
          <Grid.Col span={gridSpan}>
            <GitHubSection />
          </Grid.Col>
          <Grid.Col span={gridSpan}>
            <TwitterSection />
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};
