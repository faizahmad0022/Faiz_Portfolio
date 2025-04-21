import { Card } from "@/components/ui/card";
import React from "react";
type Image = {
  image: string;
  name: string;
  
};

type CardProps = {
  images: Image[];
  
};

const ImageCard: React.FC<CardProps> = ({ images }) => {
  return (
    <Card className=" rounded-lg w-full max-w-md  bg-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800  border-gray-700">
     <p className="flex justify-center text-xl font-semibold pt-3 ">
     <span className="border-b-2 text-white">TOOLS</span>
     </p>
     <div className="grid grid-cols-3 gap-2 p-3">
     {images.map((imageObj, index) => (
        
        <div key={index} className="text-center ">
          <div className="rounded-full overflow-hidden bg-gray-500 w-24 h-24 mx-auto flex items-center justify-center">
            
            <picture>
              <img src={imageObj.image} width={70} height={70} alt={`Image ${index}`} onError={(e) => console.error('Image loading error:', e)} />
            </picture>

          </div>
          <p className="pt-2 text-base text-white">{imageObj.name}</p>
        </div>
      ))}
     </div>
      
    </Card>
  );
};

export default ImageCard;
