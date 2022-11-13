import { FC } from 'react';
import { Button } from '../Button';
import { Props } from './SuccesWindow';

import * as S from './styled';

export const SuccesWindow: FC<Props> = ({ count, isSuccess }) => {
  return (
    <S.Container className={isSuccess ? 'isSent' : ''}>
      <img
        src='/assets/success.svg'
        alt='Success'
      />
      <S.H3>Success!</S.H3>
      <S.P>You sent invitation to {count} users!</S.P>
      <Button
        position='sticky'
        text='Home'
        onClick={() => window.location.reload()}
      />
    </S.Container>
  );
};
