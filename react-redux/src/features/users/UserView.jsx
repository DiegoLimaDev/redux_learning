import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const users = useSelector((state) => state.user.users);
  const errorOnUsers = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List of users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Carregar usuários</button>
      {users !== [] ? users : null}
      {errorOnUsers !== '' ? errorOnUsers : null}
    </div>
  );
};
