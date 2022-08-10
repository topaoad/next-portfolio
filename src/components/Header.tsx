import React from 'react';
import type { FC } from 'react';
import styles from './Header.module.css';
import { Anchor, Burger, Header as MantineHeader } from '@mantine/core';

type Props = {
  isMobileUi: boolean;
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
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
        </div>
      </MantineHeader>
    </div>
  );
};
