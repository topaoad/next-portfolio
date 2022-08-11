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
      <Anchor component='a'> {props.children} </Anchor>
    </Link>
  );
};
