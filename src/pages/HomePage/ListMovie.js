import { Card, Tooltip } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { https } from '../../service/Api';

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    https
      .get("api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((res) => {
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    return ()=>{console.log("tesssttt")}
  }, []);

  let renderList = () => {
    return movieArr.slice(0,20).map(movie => {
      return <Card
        key={movie.maPhim}
        hoverable
        style={{
          width: "100%",
        }}
        cover={<img className='h-96 object-cover' alt="example" src={movie.hinhAnh} />}
      >
        <Tooltip title={movie.tenPhim}>
          <Meta title={movie.tenPhim} />
        </Tooltip>
        <NavLink 
        to={`/detail/${movie.maPhim}`}
        className='bg-red-500 font-bold py-2 text-center rounded text-xl text-white block mt-5'>Xem phim</NavLink>
      </Card>;
    });
  };
  return (
    //min-width: mobile first
    <div className='grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5'>
      {renderList()}
    </div>
  );
}
