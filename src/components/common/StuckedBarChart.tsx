import React, { FC } from 'react';
import { Progress } from '@mantine/core';

import type { LanguageData } from '../github/LanguageInfo';

type Props = {
  languages: LanguageData[];
};

export const StuckedBarChart: FC<Props> = (props) => {
  const sections = props.languages.map((language) => ({
    value: language.percentage,
    color: language.color,
  }));

  return <Progress size='md' sections={sections} />;
};
