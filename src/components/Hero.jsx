import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <div className="bg-gray-200 text-black mx-auto px-4 pt-24 pb-6 flex justify-center">
        <Typewriter
          options={{
            strings: [
              'PT. SANSA MULYA SEMPURNA',
              'SANSA EXPRESS',
              'Perfect Delivery Worldwide',
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: 'text-2xl font-semibold',
            cursorClassName: 'text-2xl animate-ping',
          }}
        />
      </div>
    </>
  );
};

export default Hero;
