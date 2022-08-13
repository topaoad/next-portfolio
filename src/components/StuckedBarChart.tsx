import React, { FC } from 'react';
import { Box, Group } from '@mantine/core';

import type { LanguageData } from './LanguageInfo';

type Props = {
  languages: LanguageData[];
};

export const StuckedBarChart: FC<Props> = (props) => {
  return (
    <Group spacing={0} sx={{ overflow: 'hidden', borderRadius: 8 }}>
      {props.languages.map((language) => (
        <Box
          key={language.name}
          sx={{
            width: `${language.percentage}%`,
            backgroundColor: language.color,
            height: 8,
          }}
        ></Box>
      ))}
    </Group>
  );
};
