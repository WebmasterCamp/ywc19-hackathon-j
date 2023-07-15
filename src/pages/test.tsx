import { NextPage } from 'next';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test: NextPage = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        className="w-1/4 h-1/4"
        constraints={{ facingMode: 'environment' }}
        onResult={(result: any, error: any) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
    </>
  );
};

export default Test;
