import React from 'react';
import { Footer as MantineFooter } from '@mantine/core';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <MantineFooter height={60} p='md' className={styles.footer}>
      <a
        href='https://www.youtube.com/c/shimabu_it/'
        target='_blank'
        rel='noopener noreferrer'
      >
        &copy; 2022 Shimabu IT University
      </a>
    </MantineFooter>
  );
};
