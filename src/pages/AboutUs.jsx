import React from 'react';
import Headline from '../components/Headline';

const headContent = [
  {
    content:
      'Sansa Express didirikan pada Hari Jum’at Tanggal 05 Bulan 08 Tahun 2022, dengan notaris Victory, Sarjana Hukum. Yang di sahkan melalui SK. Mentri Kehakiman dan Hak Asasi Manusia RI No. AHU-0055992.AH.01.01.Tahun 2016, Tanggal 15 Desember 2002 dan resmi disahkan sebagai (PT) Perseroan Terbatas dengan nama PT. Sansa Mulya Sempurna.',
  },
  {
    content:
      'Sansa Express adalah perusahaan Expedisi dengan pelayanan dan usaha yang maksimal selalu memberikan servis yang terbaik, dan terus berinovasi, dengan tujuan memberikan pelayanan terbaik untuk kepuasan customer kami.',
  },
];

const AboutUs = () => {
  return (
    <>
      <Headline headTitle="About Us" headContent={headContent} />
    </>
  );
};

export default AboutUs;
