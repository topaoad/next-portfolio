import React from 'react';
import type { FC } from 'react';
import { Navbar as MantineNavbar } from '@mantine/core';
import styles from './Navbar.module.css';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

type Props = {
  opened: boolean;
};

export const Navbar: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);

  return isMobileUi ? (
    <MantineNavbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
      className={styles.navbar}
    >
      <MantineNavbar.Section mt='md'>About</MantineNavbar.Section>
      <MantineNavbar.Section>Blog</MantineNavbar.Section>
      <MantineNavbar.Section>Portfolio</MantineNavbar.Section>
      <MantineNavbar.Section>Contact</MantineNavbar.Section>
    </MantineNavbar>
  ) : (
    <div></div>
  );
};
