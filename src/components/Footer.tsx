import React from 'react';
import { Center, Footer as MantineFooter, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <MantineFooter height={60} p='md'>
      <Center>
        <Text
          variant='link'
          component='a'
          href='https://www.youtube.com/c/shimabu_it/'
          color='dimmed'
        >
          &copy; 2022 Shimabu IT University
        </Text>
      </Center>
    </MantineFooter>
  );
};
