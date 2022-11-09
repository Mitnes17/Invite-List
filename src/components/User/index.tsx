import { FC } from 'react';
import { Props } from './User';
import * as S from './styled';

export const User: FC<Props> = ({ user: { id, email, first_name, last_name, avatar } }) => {
  const fullName = first_name + last_name;

  return (
    <S.User>
      <img
        src={avatar}
        alt=''
      ></img>
      <S.NameEmail>
        {fullName}
        {email}
      </S.NameEmail>
      <S.AddBtn></S.AddBtn>
    </S.User>
  );
};
