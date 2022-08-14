import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/icons/Layout';
import { Container, Grid, Stack } from '@mantine/core';
import { TitleSection } from 'src/components/TitleSection';
import { BlogSection } from 'src/components/BlogSection';
import { PortfolioSection } from 'src/components/PortfolioSection';
import { GitHubSection } from 'src/components/GitHubSection';
import { TwitterSection } from 'src/components/TwitterSection';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

const HomePage: NextPage = () => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  return (
    <Layout content='Contact'>
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
    </Layout>
  );
};

export default HomePage;
