import { useEffect, useState, useCallback } from 'react';
import { User } from '../User';
import * as S from './styled';

export const InviteList = () => {
  const [url, setUrl] = useState('https://reqres.in/api/users');

  const [users, setUsers] = useState([]);

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          placeholder='Search user'
          type='text'
        ></S.Input>
      </S.SearchBar>
      <S.UserList>
        {users.map((user) => (
          <User user={user} />
        ))}
      </S.UserList>
      <S.SendBtn>Send invite</S.SendBtn>
    </S.Container>
  );
};
