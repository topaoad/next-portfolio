import React, { FC } from 'react';
import { Progress } from '@mantine/core';

import type { LanguageDataType } from '../github/LanguageInfo';

type Props = {
  languages: LanguageDataType[];
};

export const StuckedBarChart: FC<Props> = (props) => {
  const sections = props.languages.map((language) => ({
    value: language.percentage,
    color: language.color,
  }));

  return <Progress size='md' sections={sections} />;
};
