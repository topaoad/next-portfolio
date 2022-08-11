import React from 'react';
import type { FC } from 'react';
import { Container } from '@mantine/core';
import styles from './TitleSection.module.css';

type Props = {
  name: string;
};

export const TitleSection: FC<Props> = (props) => {
  return (
    <Container className={styles.container}>
        <p className={styles.title}>Shimabu IT University</p>
        <p className={styles.subTitle}>
          {props.name}のポートフォリオのためのページです
        </p>
    </Container>
  );
};
