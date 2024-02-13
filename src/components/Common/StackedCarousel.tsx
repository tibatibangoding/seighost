import React, { useState } from 'react';
import Image from 'next/image';

const StackedCarousel: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number>(1); // Set initial state to 1

  const handleMouseLeave = () => {
    // Do nothing on mouse leave, so it stays hovered on the last image
  };

  return (
    <div className="flex gap-1 max-w-[800px] mx-auto items-stretch">
      {[1, 2, 3, 4].map((imageNumber) => (
        <div
          key={imageNumber}
          className={`h-full transition-all duration-1000 hover:w-full w-24 grayscale ${
            hoveredImage !== imageNumber
              ? 'grayscale h-[900px]'
              : 'grayscale-0 w-[800px] '
          } overflow-hidden`}
          onMouseEnter={() => setHoveredImage(imageNumber)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="group w-full transform transition-transform duration-300">
            <Image
              src={`/images/${imageNumber}.jpg`}
              alt={`Image ${imageNumber}`}
              width={300}
              height={300}
              className={`object-cover w-full h-[800px] transition-transform duration-300 ${
                hoveredImage !== imageNumber ? 'scale-100' : ''
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCarousel;
