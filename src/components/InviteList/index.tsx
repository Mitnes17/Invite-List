import { useEffect, useState } from 'react';
import { User } from '../User';
import { UserType } from '../User/User';
import { Skeleton } from '../Skeleton';
import { SuccesWindow } from '../SuccesWindow';
import { Button } from '../Button';

import * as S from './styled';

export const InviteList = () => {
  //fetch request for users
  const urls = ['https://reqres.in/api/users', 'https://reqres.in/api/users?page=2'];

  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = (url: string) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setUsers((prev) => prev.concat(json.data)))
        .catch((error) => console.log(error))
        .finally(() => setTimeout(() => setIsLoading(false), 1000));
    };
    urls.forEach((url) => fetchData(url));
    return () => abortController.abort();
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const onChangeFilter = (e: any) => setSearchValue(e.target.value);

  const [invites, setInvited] = useState<number[]>([]);

  const onClickInvite = (id: number) =>
    invites.includes(id)
      ? setInvited((prev) => prev.filter((item) => item !== id))
      : setInvited((prev) => [...prev, id]);

  const [isSuccess, setIsSuccess] = useState(false);

  const onClickSendInvite = () => setIsSuccess(true);

  return (
    <S.Container>
      {isSuccess ? (
        <SuccesWindow
          count={invites.length}
          {...{ isSuccess }}
        />
      ) : (
        <S.Wrap>
          <S.SearchBar>
            <svg
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
            </svg>
            <S.Input
              onChange={onChangeFilter}
              placeholder='Search user'
              type='text'
            ></S.Input>
          </S.SearchBar>
          {isLoading ? (
            <S.SkeletWrap>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </S.SkeletWrap>
          ) : (
            <S.UserList>
              {users
                .filter((item: UserType) => {
                  const fullName = item.first_name + item.last_name;

                  return (
                    fullName.includes(searchValue.toLowerCase()) ||
                    item.email.includes(searchValue.toLowerCase())
                  );
                })
                .map((user: UserType) => (
                  <User
                    onClick={onClickInvite}
                    invitedUser={invites.includes(user.id)}
                    user={user}
                    key={user.id}
                  />
                ))}
            </S.UserList>
          )}
          <Button
            className={invites.length > 0 ? '' : 'isHidden'}
            onClick={onClickSendInvite}
            text='Send invite'
          />
        </S.Wrap>
      )}
    </S.Container>
  );
};
