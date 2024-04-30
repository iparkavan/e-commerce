import Image from "next/image";
import React, { Key, useState } from "react";
import { LeftArrowCircle, RightArrowCircle } from "./icons";

interface ImageSliderProps {
  imageUrl: {
    publicId: string;
    url: string;
    _id: Key;
  }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeft = () => {
    setCurrentSlide(
      currentSlide === 0 ? imageUrl.length - 1 : currentSlide - 1
    );
  };

  const handleRight = () => {
    setCurrentSlide(
      currentSlide === imageUrl.length - 1 ? 0 : currentSlide + 1
    );
  };

  console.log(imageUrl);
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute left-5 z-10 text-gray-500 drop-shadow-sm active:drop-shadow-xl cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500"
          onClick={handleLeft}
        >
          <LeftArrowCircle size={25} />
        </div>
        <div className="relative w-full h-[450px]">
          {imageUrl &&
            imageUrl.length &&
            imageUrl.map((image, index: number) => (
              <Image
                key={index}
                fill
                // width={1000}
                // height={500}
                src={image.url}
                alt={`#product-image - ${index + 1}`}
                className={
                  currentSlide === index
                    ? "object-cover rounded-md"
                    : "object-cover rounded-md hidden"
                }
              />
            ))}
        </div>
        <div
          className="absolute right-5 z-10 active:drop-shadow-xl text-gray-500 drop-shadow-sm cursor-pointer rounded-full transition-all duration-300 active:ring-2 ring-gray-500"
          onClick={handleRight}
        >
          <RightArrowCircle size={25} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          {imageUrl &&
            imageUrl.length &&
            imageUrl.map((image, index: number) => (
              <Image
                // fill
                width={70}
                height={70}
                src={image.url}
                alt={`#product-image - ${index + 1}`}
                onMouseMove={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "object-cover rounded-md ring-2 ring-blue-500 ring-offset-2"
                    : "object-cover rounded-md"
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
