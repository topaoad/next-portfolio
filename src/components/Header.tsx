import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import {
  ActionIcon,
  Burger,
  Header as MantineHeader,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import { AnchorSelf } from './AnchorSelf';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div>
      <MantineHeader height={70} p='md'>
        <div className={styles.header}>
          {isMobileUi && (
            <Burger
              opened={props.opened}
              onClick={() => props.toggleOpenState()}
              size='sm'
              title='バーガーメニュー'
              mr='xl'
            />
          )}
          <Link href='/' passHref>
            <Text className={styles.title}>Shimabu IT University</Text>
          </Link>
          {!isMobileUi && (
            <div className={styles.menu}>
              <AnchorSelf href='about'>About</AnchorSelf>
              <AnchorSelf href='blog'>Blog</AnchorSelf>
              <AnchorSelf href='portfolio'>Portfolio</AnchorSelf>
              <AnchorSelf href='contact'>Contact</AnchorSelf>
            </div>
          )}
          <ActionIcon
            variant='outline'
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title='ダークモードをトグル'
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </div>
      </MantineHeader>
    </div>
  );
};
