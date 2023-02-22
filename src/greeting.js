import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/greetings';

function Greet() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const welcome = useSelector((state) => state.greetings);
  return (
    <>
      <h1>{ welcome }</h1>
      <button type="submit" onClick={() => dispatch(fetchData())}> Change Greetibg </button>
    </>
  );
}

export default Greet;
