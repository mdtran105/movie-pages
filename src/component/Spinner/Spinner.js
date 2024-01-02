import React from 'react';
import { useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';

export default function Spinner() {
  let { isLoading } = useSelector(state => state.spinnerSlice);
  return isLoading ? (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'black',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1,
      display: 'grid',
      placeItems: 'center'
    }}>
      <HashLoader color="#fca311" size={86} />
    </div>
  ) : (<></>);
}