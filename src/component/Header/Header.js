import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  let handleLogout = () => {
    localStorage.removeItem("USER_INFOR");
    window.location.reload();
  };
  let renderMenu = () => {
    let cssBtn = "rounged px-5 py-2 border-2 border-black";
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button onClick={handleLogout} className={cssBtn}>Log out</button>
        </>
      );

    }
    return (
      <>
        <button onClick={() => {
          window.location.href = "/login";
        }} className={cssBtn}>Log in</button>
        <button className={cssBtn}>Register</button>

      </>

    );
  };
  return (
    <div className="h-20">
      <div className="shadow-md shadow-black fixed w-full top-0 z-20 bg-white">
        <div className='h-20 flex justify-between items-center container'>
          <NavLink to='/'><span className='text-2xl font-medium text-red-500'>CyberFlex</span></NavLink>
          <div className='space-x-5'>{renderMenu()}</div>
        </div>
      </div>
    </div>
  );
}
