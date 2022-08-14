import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';

type Props = {
  href: string;
  children: ReactNode;
};

export const AnchorSelf: FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <Anchor
        component='a'
        sx={(theme) => ({
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        })}
      >
        {' '}
        {props.children}{' '}
      </Anchor>
    </Link>
  );
};
