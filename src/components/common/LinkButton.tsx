import React, { FC, ReactNode } from 'react';
import { Button } from '@mantine/core';

type Props = {
  children: ReactNode;
};

export const LinkButton: FC<Props> = (props) => {
  return (
    <Button
      radius='xl'
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? 'black' : 'white',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[2]
            : theme.colors.gray[7],
      })}
    >{props.children}</Button>
  );
};
