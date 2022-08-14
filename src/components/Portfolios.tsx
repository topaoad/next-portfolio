import React from 'react';
import { useRouter } from 'next/router';
import { Container, Grid } from '@mantine/core';
import { portfolioData } from 'data/portfolioData';
import { PortfolioCard } from './PortfolioCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { ColorSlider } from '@mantine/core/lib/ColorPicker/ColorSlider/ColorSlider';

export const Portfolios = () => {
  // ポートフォリをいくつ表示するかどうか（モバイル表示かどうか、ホームページかどうかで異なる）
  const router = useRouter();
  const [isMobileUi] = useAtom(isMobileUiAtom);
  let row;
  let col;
  if (router.pathname === '/') {
    if (isMobileUi) {
      row = 3;
      col = 1;
    } else {
      row = 2;
      col = 3;
    }
  } else {
    if (isMobileUi) {
      row = 4;
      col = 1;
    } else {
      row = 3;
      col = 3;
    }
  }
  const numbersToShow = row * col;
  const span = 12 / col;

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
