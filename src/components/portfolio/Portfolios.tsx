import React, { FC } from 'react';
import { Container } from '@mantine/core';
import { portfolioData } from 'data/portfolioData';
import { PortfolioCard } from './PortfolioCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

type Props = {
  isHomePage: boolean;
};

export const Portfolios: FC<Props> = ({ isHomePage }) => {
  // ポートフォリをいくつ表示するかどうか（モバイル表示かどうか、ホームページかどうかで異なる）
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numbersToShow = isHomePage ? (isMobileUi ? 3 : 6) : isMobileUi ? 4 : 9;

  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        width: '100%',
        gap: '24px',
      }}
    >
      {portfolioData.slice(0, numbersToShow).map((portfolio) => (
        <PortfolioCard key={portfolio.id} data={portfolio} />
      ))}
    </Container>
  );
};
