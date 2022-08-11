import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { AppShell } from '@mantine/core';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Navbar } from 'src/components/Navbar';
import { useResizeObserver } from '@mantine/hooks';
import { isMobileWidth } from 'src/utils/mobile';
import { Contents } from 'src/components/Contents';

const Home: NextPage = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [isMobileUi, setIsMobileUi] = useAtom(isMobileUiAtom);
  const [ref, rect] = useResizeObserver();

  const toggleOpenState = (): void => setOpened((prev) => !prev);

  useEffect(() => {
    setIsMobileUi(isMobileWidth(rect.width));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rect.width]);

  return (
    <AppShell
      padding='md'
      header={<Header opened={opened} toggleOpenState={toggleOpenState} />}
      footer={<Footer />}
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar opened={opened} />}
      ref={ref}
    >
      <Head>
        <title>Next Portfolio</title>
        <meta name='description' content='Shimabu IT University' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Contents />
    </AppShell>
  );
};

export default Home;
