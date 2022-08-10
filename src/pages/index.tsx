import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppShell } from '@mantine/core';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Navbar } from 'src/components/Navbar';
import { useResizeObserver } from '@mantine/hooks';
import { isMobileWidth } from 'src/utils/mobile';
import { Contents } from 'src/components/Contents';

const Home: NextPage = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [isMobileUi, setIsMobileUi] = useState<boolean>(true);
  const [ref, rect] = useResizeObserver();

  const toggleOpenState = (): void => setOpened((prev) => !prev);

  useEffect(() => {
    setIsMobileUi(isMobileWidth(rect.width));
  }, [rect.width]);

  return (
    <AppShell
      padding='md'
      header={
        <Header
          isMobileUi={isMobileUi}
          opened={opened}
          toggleOpenState={toggleOpenState}
        />
      }
      footer={<Footer />}
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar isMobileUi={isMobileUi} opened={opened} />}
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
