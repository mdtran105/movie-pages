import { Button } from 'antd';
import React, { memo } from 'react';

function Footer({ like, handelPlusLike }) {
  console.log("con render");
  return (
    <div className='p-5 bg-red-500'>
      Footer
      <h2>Like: {like}</h2>
      <Button onClick={handelPlusLike} className="bg-slate-600">Plus like</Button>
    </div>
  );
}

export default memo(Footer);
