import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container } from '@mantine/core';
import { portfolioData } from 'data/portfolioData';
import { PortfolioCard } from './PortfolioCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

export const Portfolios = () => {
  // ポートフォリをいくつ表示するかどうか（モバイル表示かどうか、ホームページかどうかで異なる）
  const router = useRouter();
  const [isMobileUi] = useAtom(isMobileUiAtom);
  let numbersToShow;
  if (router.pathname === '/') {
    numbersToShow = isMobileUi ? 3 : 6;
  } else {
    numbersToShow = isMobileUi ? 4 : 9;
  }

  return (
    <Container fluid>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        {portfolioData.slice(0, numbersToShow).map((portfolio) => (
          <PortfolioCard key={portfolio.id} data={portfolio} />
        ))}
      </Box>
    </Container>
  );
};
