import React from 'react';
import type { FC } from 'react';
import styles from './Header.module.css';
import { Anchor, Burger, Header as MantineHeader } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
  const [ref, rect] = useResizeObserver();
  const isMobileSize = () => {
    return (rect.width <= 390);
  }

  return (
    <div ref={ref}>
      <MantineHeader height={70} p='md'>
        <div className={styles.header}>
          {isMobileSize() && (
            <Burger
              opened={props.opened}
              onClick={() => props.toggleOpenState()}
              size='sm'
              title='バーガーメニュー'
              mr='xl'
            />
          )}
          <h1 className={styles.title}>Shimabu IT University</h1>
          {!isMobileSize() && (
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
