import React, { Suspense } from 'react';
import { Container, Stack } from '@mantine/core';
import { TitleSection } from 'src/components/TitleSection';
import { BlogSection } from './BlogSection';
import { PortfolioSection } from './PortfolioSection';
import { GitHubSection } from './GitHubSection';
import { TwitterSection } from './TwitterSection';
import styles from './Contents.module.css';

export const Contents = () => {
  return (
    <Container className={styles.container}>
      <Stack
        spacing='lg'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <TitleSection name='ピータン' />
        <Suspense>
          <BlogSection />
          <PortfolioSection />
          <GitHubSection />
          <TwitterSection />
        </Suspense>
      </Stack>
    </Container>
  );
};
