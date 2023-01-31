import React from 'react';

const Headline = ({ headTitle, headContent }) => {
  return (
    <>
      <div className="mx-auto p-4 bg-gray-600 text-white">
        <h1 className="text-xl font-bold border-solid border-b-2 pb-2 border-white w-fit">
          {headTitle}
        </h1>
        <div className="text-lg mt-4 space-y-4">
          {headContent.map((detail) => {
            return (
              <p className="text-justify animate__animated animate__fadeInDown">
                {detail.content}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Headline;
