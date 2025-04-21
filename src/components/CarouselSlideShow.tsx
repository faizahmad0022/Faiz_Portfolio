import React, { useEffect, useState } from "react";

interface Image {
  src: string;
  alt: string;
  label: string;
}

interface CarouselSlideShowProps {
  images?: Image[];
}

const CarouselSlideShow: React.FC<CarouselSlideShowProps> = ({ images = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Image[]>([]);

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      if (document.getElementById("carouselDarkVariant")) {
        initTWE({ Carousel });
      }
    };
    init();
  }, [images]);

  useEffect(() => {
    const handleImageLoad = (image: Image) => {
      setLoadedImages((prevLoadedImages) => [...prevLoadedImages, image]);
      if (loadedImages.length === images.length) {
        setIsLoading(false);
      }
    };

    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(image);
    });
  }, [images, loadedImages.length]);

  return (
    <div id="carouselDarkVariant" className="relative " data-twe-carousel-init data-twe-ride="carousel">
      {/* Carousel indicators */}
      <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {images.map((_, index) => (
          <button
            key={index}
            data-twe-target="#carouselDarkVariant"
            data-twe-slide-to={index}
            data-twe-carousel-active={index === 0 ? "" : undefined}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none mb-1"
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Loading section */}
      {/* {isLoading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-6 rounded-lg shadow-lg z-50">
          <div className="animate-spin rounded-full border-4 border-black border-t-transparent h-12 w-12"></div>
          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      )} */}

      {/* Carousel items */}
      <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${loadedImages.includes(image) ? "opacity-100" : ""
              }`}
            data-twe-carousel-fade
            data-twe-carousel-item
            data-twe-carousel-active={index === 0 ? "" : undefined}
          >
            <picture className="rounded-lg">
              <img
                src={image.src}
                className="block w-full  h-[580px] rounded-3xl"
                
                alt={image.alt}
              loading="lazy"

              />
            </picture>

            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center md:block rounded-3xl">
              {/* <h5 className="text-xl ">{image.label}</h5> */}
              {/* <p>{image.alt}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselDarkVariant"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselDarkVariant"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default CarouselSlideShow;