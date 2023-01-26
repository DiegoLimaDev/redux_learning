import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock icecream</button>
    </div>
  );
};
