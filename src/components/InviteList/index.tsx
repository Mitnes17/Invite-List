import { useEffect, useState, useCallback } from 'react';
import { User } from '../User';
import { Skeleton } from '../Skeleton';
import * as S from './styled';
import { UserType } from '../User/User';

export const InviteList = () => {
  const [url, setUrl] = useState('https://reqres.in/api/users');

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.log(error))
      .finally(() => setTimeout(() => setIsLoading(false), 3000));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [searchValue, setSearchValue] = useState('');

  const onChangeFilter = (e: any) => setSearchValue(e.target.value);

  return (
    <S.Container>
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
        <div>
          <Skeleton count={4} />
          <Skeleton count={4} />
          <Skeleton count={4} />
          <Skeleton count={4} />
        </div>
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
                user={user}
                key={user.id}
              />
            ))}
        </S.UserList>
      )}

      <S.SendBtn>Send invite</S.SendBtn>
    </S.Container>
  );
};
