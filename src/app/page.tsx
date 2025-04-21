"use client"

import { useParams } from "next/navigation";
import { Key, useEffect, useState } from "react";
import ListItem from "../components/ui/ListView/ListView";
import { AnnimationPage } from "@/components/annimation";
import { PuffLoader } from "react-spinners";
import { fetchlandingpagedata } from "@/hooks/useApiData";
import logo from "../../public/devdock-logo.png";
import Image from 'next/image';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState<any>(null);// Initial state can be null



  useEffect(() => {
    if (typeof window !== "undefined") {
    const fetchDataAndUpdateState = async () => {
      setLoading(true); // Set loading state to true before fetching data

      try {
        const data = await fetchlandingpagedata();
        setPortfolioData(data);
        console.log("Updated data:", data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data (whether successful or not)
      }
    };

  
    fetchDataAndUpdateState();
  }
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (

    <div>
      {
        loading ?
          <div className="flex flex-1 flex-col pt-40 justify-center items-center">
            <PuffLoader
              color={'#f59e0b'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />

            <h1 className="text-3xl mt-5 text-center text-slate-700  font-extrabold antialiased hover:subpixel-antialiased">
              DevDock
            </h1>
          </div>
          :


          <div className="min-h-screen min-w-screen bg-gray-800">

            <div className="min-h-full w-1/5 scale-150 -rotate-12 -translate-x-20 translate-y- bg-amber-400" />
            <head>
              <title>DevDock</title>

            </head>
            <AnnimationPage>
              <div className=" ml-9 flex pt-6  w-24  ">
                <Image src={logo} alt="Profile" width={100} height={80} />
              </div>




              <p className="p-4 rounded-lg  justify-center flex text-wrap  font-extrabold text-4xl">
                Get yours  Software Development Services
                Under 1 Roof
              </p>
              <div className=" flex flex-col justify-center items-center ">


                <section className="">


                  <div className="flex-1 
                        sm:flex sm:flex-row sm:p-3
                        md:grid md:grid-cols-2 md:p-2
                        lg:grid lg:grid-cols-2 
                        gap-4 pt-4 md:pt-11 relative z-30">

                    {portfolioData?.data?.map((item: {
                      mainHeading: string; id: any; SubHeading: string; ProfilePic: string  | "";
                    }, index: Key | null | undefined) => (
                      <a key={index} href={`profile/${item.id}`} className="flex-1">


                        <ListItem
                          key={index}
                          imageUrl={item.ProfilePic?item.ProfilePic :""}
                          mainheading={item.mainHeading}
                          SubHeading={item.SubHeading}
                        />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </AnnimationPage>
          </div>
      }
    </div>
  );
}
