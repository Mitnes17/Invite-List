import { FC } from 'react';
import { Props } from './User';

import * as S from './styled';

export const User: FC<Props> = ({
  user: { email, first_name, last_name, avatar, id },
  onClick,
  invitedUser,
}) => {
  const fullName = first_name + ' ' + last_name;

  return (
    <S.User>
      <img
        src={avatar}
        alt=''
      ></img>
      <S.Wrap>
        <S.NameEmail>
          <h3>{fullName}</h3>
          <S.Email>{email}</S.Email>
        </S.NameEmail>
        <S.AddBtn
          onClick={() => onClick(id)}
          className={invitedUser ? 'isInvited' : ''}
        ></S.AddBtn>
      </S.Wrap>
    </S.User>
  );
};
