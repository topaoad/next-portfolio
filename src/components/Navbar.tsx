import React from 'react';
import type { FC } from 'react';
import { Navbar as MantineNavbar } from '@mantine/core';
import styles from './Navbar.module.css';

type Props = {
  isMobileUi: boolean;
  opened: boolean;
};

export const Navbar: FC<Props> = (props) => {
  return props.isMobileUi ? (
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
