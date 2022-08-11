import React from 'react';
import type { FC } from 'react';
import styles from './Header.module.css';
import {
  ActionIcon,
  Anchor,
  Burger,
  Header as MantineHeader,
  useMantineColorScheme,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

type Props = {
  isMobileUi: boolean;
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div>
      <MantineHeader height={70} p='md'>
        <div className={styles.header}>
          {props.isMobileUi && (
            <Burger
              opened={props.opened}
              onClick={() => props.toggleOpenState()}
              size='sm'
              title='バーガーメニュー'
              mr='xl'
            />
          )}
          <h1 className={styles.title}>Shimabu IT University</h1>
          {!props.isMobileUi && (
            <div className={styles.menu}>
              <Anchor href='-' target='_self'>
                About
              </Anchor>
              <Anchor href='-' target='_self'>
                Blog
              </Anchor>
              <Anchor href='-' target='_self'>
                Portfolio
              </Anchor>
              <Anchor href='-' target='_self'>
                Contact
              </Anchor>
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
