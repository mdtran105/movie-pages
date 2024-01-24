import { Rate } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { https } from '../../service/Api';

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  let { maPhim } = useParams();
  useEffect(() => {
    // setIsLoading(true);
    https
      .get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => {
        setDetail(res.data.content);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsLoading(false);
      });
  }, []);
  console.log('detail rendering...')
  return (
    <div className='container flex items-center space-x-5'>
      {/* {isLoading && <Spinner />} */}
      <img className='w-64 h-96 rounded shadow-lg shadow-black'
        src={detail.hinhAnh} alt="film banner" />
      <div className='space-y-5'>
        <h1 className='text-3xl font-medium'>{detail.tenPhim}</h1>
        <p>{detail.moTa}</p>
        <Rate allowHalf
          value={detail.danhGia / 2}
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
}
