import React from 'react';
import Headline from '../components/Headline';

const headContent = [
  {
    content:
      'Sebagai Motto perseroan yang telah disepakati oleh seluruh karyawan dengan tujuan memberikan pelayanan yang lebih baik kepada pelanggan, sesuai dengan konsep PDCA (Plan Do Check Action).',
  },
  {
    content:
      'Sansa Express siap melakukan pick up dan mengirim seluruh item produk pelanggan di manapun, baik reguler atau express melalui pengiriman darat, laut dan udara. Dengan sumber daya manusia serta armada yang optimal yang siap bekerja 24 jam dan menjaga kepedulian terhadap keamanan cargo yang ketat di mulai dari B.O.D (Board of Director) level sampai fungsional level yang siap mendistribusikan ke seluruh Indonesia.',
  },
];

const VisionMission = () => {
  return (
    <>
      <Headline headTitle="Vision and Mission" headContent={headContent} />
    </>
  );
};

export default VisionMission;
