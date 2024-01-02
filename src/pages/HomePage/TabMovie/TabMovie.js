import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { https } from '../../../service/Api';
import List from './List';

export default function TabMovie() {
  const [dsHeThongRap, setDsHeThongRap] = useState([]);

  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
      .then((res) => {
        setDsHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const items = dsHeThongRap.map(heThongRap => {
    return {
      key: heThongRap.maHeThongRap,
      label: <img className='w-16' src={heThongRap.logo} alt="logo" />,
      children: <Tabs style={{ height: 600 }} tabPosition='left' items={heThongRap.lstCumRap.map(cumRap => {
        return {
          key: cumRap.tenCumRap,
          label: <div className='text-left w-64 truncate'>
            <h2 className='font-medium'>{cumRap.tenCumRap}</h2>
            <p>{cumRap.diaChi}</p>
          </div>,
          children: <List dsPhim={cumRap.danhSachPhim} />
        };
      })} />,
    };
  });
  return (
    <Tabs style={{ height: 600 }}
      tabPosition='left'
      defaultActiveKey="1"
      items={items} onChange={onChange} />
  );
}





