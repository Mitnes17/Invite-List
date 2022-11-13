import { FC } from 'react';
import { Props } from './Button.d';

import * as S from './styled';

export const Button: FC<Props> = ({ onClick, className, text, position }) => {
  return (
    <S.Button
      {...{ onClick }}
      {...{ className }}
      {...{ position }}
    >
      {text}
    </S.Button>
  );
};
