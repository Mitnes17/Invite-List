import { FC } from 'react';
import { Props } from './Button.d';

import * as S from './styled';

export const Button: FC<Props> = ({ onClick, className, text, position, bot }) => {
  return (
    <S.Button
      {...{ onClick }}
      {...{ className }}
      {...{ position }}
      {...{ bot }}
    >
      {text}
    </S.Button>
  );
};
