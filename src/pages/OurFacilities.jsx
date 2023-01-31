import React from 'react';
import Headline from '../components/Headline';

const headContent = [
  {
    content:
      'Seluruh staf Sansa Express telah berpengalaman dalam mengelola dan mengirim barang dengan mengedepankan pelayanan total support yang sangat customize, flexible dan humble.',
  },
  {
    content:
      'Untuk mendukung operasional dan pendistribusian barang customer, kami memiliki fasilitas : Grand Max Blindvan. Mitsubishi L 300. Mitsubishi Engkel Box. Gudang + 200 m2. SDM yang berpengalaman.',
  },
];

const OurFacilities = () => {
  return (
    <>
      <Headline headTitle="Our Facilities" headContent={headContent} />
    </>
  );
};

export default OurFacilities;
