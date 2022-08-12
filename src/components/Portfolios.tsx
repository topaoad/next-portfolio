import React from 'react';
import { Container, Grid } from '@mantine/core';
import { portfolioData } from 'data/portfolioData';
import { PortfolioCard } from './PortfolioCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

export const Portfolios = () => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numbersToShow = isMobileUi ? 3 : 6;
  const span = isMobileUi ? 12 : 4;

  return (
    <Container fluid>
      <Grid>
        {portfolioData.slice(0, numbersToShow).map((portfolio) => (
          <Grid.Col span={span} key={portfolio.id}>
            <PortfolioCard data={portfolio} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
