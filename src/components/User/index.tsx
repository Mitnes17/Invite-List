import { FC } from 'react';
import { Props } from './User';
import * as S from './styled';

export const User: FC<Props> = ({ user: { email, first_name, last_name, avatar } }) => {
  const fullName = first_name + ' ' + last_name;

  return (
    <S.User>
      <img
        src={avatar}
        alt=''
      ></img>
      <S.Wrap>
        <S.NameEmail>
          <S.FullName>{fullName}</S.FullName>
          <S.Email>{email}</S.Email>
        </S.NameEmail>
        <S.AddBtn></S.AddBtn>
      </S.Wrap>
    </S.User>
  );
};
