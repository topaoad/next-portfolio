import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { AppShell, Container, Space, Stack, Text, Title } from '@mantine/core';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Navbar } from 'src/components/Navbar';
import { useResizeObserver } from '@mantine/hooks';
import { isMobileWidth } from 'src/utils/mobile';

const About: NextPage = () => {
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
      <Container>
      <Head>
        <title>About - Next Portfolio</title>
        <meta name='description' content='Shimabu IT University' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack>
        <Space h='md'/>
        <Title order={2}>About</Title>
        <Text>pitang1965</Text>
        <Text>東京都いなか市在住の50代男性。 個人開発のためWeb技術を2019年から独学を継続（今はTypeScript/React/Supabaseが中心）。 昔19年ほどC/C++で開発・保守。 医療機器の品証も長くやりましたが、この8月から退職前の有給休暇に入ります。 お気軽にフォロー願います🤲</Text>
      </Stack>
    </Container>
    </AppShell>
  );
};

//   return (
//     <Container>
//       <Head>
//         <title>About - Next Portfolio</title>
//         <meta name='description' content='Shimabu IT University' />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       <Stack>
//         <Space h='md'/>
//         <Title order={2}>About</Title>
//         <Text>pitang1965</Text>
//         <Text>東京都いなか市在住の50代男性。 個人開発のためWeb技術を2019年から独学を継続（今はTypeScript/React/Supabaseが中心）。 昔19年ほどC/C++で開発・保守。 医療機器の品証も長くやりましたが、この8月から退職前の有給休暇に入ります。 お気軽にフォロー願います🤲</Text>
//       </Stack>
//     </Container>
//   );
// };

export default About;
