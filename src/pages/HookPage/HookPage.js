import { Button } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Footer from './Footer';

export default function HookPage() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const scoreArr = [2, 5, 9, 8];
  useEffect(() => {}, []);

  console.log("cha render");
  const handelPlus = () => {
    setNumber(number + 1);
  };
  const handelPlusLike = useCallback(() => {
    setLike(like + 1);
  }, [like]);

  let total = useMemo(() => {
    return scoreArr.reduce((sum, number) => (sum = sum + number));
  })
  
  return (
    <div>
      <strong>{number}</strong>
      <Button type='primary' onClick={handelPlus} className='bg-blue-500'>Plus number</Button>
      <br />
      <strong>Like {like}</strong>
      <Button type='primary' onClick={handelPlusLike} className='bg-red-500'>Plus like</Button>
      <Footer handlePlusLike={handelPlusLike} like={like} />
    </div>
  );
}
