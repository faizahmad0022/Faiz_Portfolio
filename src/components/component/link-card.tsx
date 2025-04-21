import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

type Link = {
  svg: string;
  name: string;
  url: string;
  subname: string;
};

type LinkCardProps = {
  links: Link[];
  title: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ links, title }) => {
  return (
    <Card className="rounded-lg w-full max-w-md border bg-gray-700 border-slate-700 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <p className="flex justify-center text-xl font-semibold pt-3">
        <span className="border-b-2 text-white">{title}</span>
      </p>
      <div className="flex flex-col gap-2 p-3  ">
        {links.map((link, index) => (
          <div key={index} className="flex justify-center">
            <button
              onClick={() => {
                window.open(link.url);
              }}
              className="h-24 w-[280px] bg-stone-200 hover:bg-stone-300 rounded-xl p-4 flex items-center "
            >
              <Image
                src={link.svg}
                alt={link.name}
                width={48}
                height={80}
                className="object-contain"
              />
              <div className=" flex flex-col items-start  ml-4">
                <div className="text-black">{link.name}</div>
                <div className="text-black font-bold text-2xl">{link.subname}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </Card>
  );

};

export default LinkCard;
