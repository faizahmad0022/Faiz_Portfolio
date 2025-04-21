"use client";
import { AnnimationPage } from "@/components/annimation";
import Navbar from "@/components/ui/Navbar/page";
import { fetchData } from "@/hooks/useApiData";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

// export const metadata: Metadata = {
//   title: "Aasad",
//   description: "Fahad  Ibrahim RESUME.",

// };

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState<any>(null);
  const myParams = useParams();
  const id = myParams.slug;
  console.log("my params:", myParams)
  useEffect(() => {

    if (typeof window !== "undefined") {
      const fetchDataAndUpdateState = async () => {
        setLoading(true);
        try {
          const parsedId = parseInt(id as unknown as string || '');
          const profileId = !isNaN(parsedId) && Number.isInteger(parsedId) && parsedId < 4 && parsedId > 0 ? parsedId : 2;

          const data = await fetchData(profileId);
          setPortfolioData(data);
          console.log("Updated data:", data);
          setLoading(false);
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
        finally {
          setLoading(false); // Set loading state to false after fetching data (whether successful or not)
        }
      };
      fetchDataAndUpdateState();




    }
  }, [id]);
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


          <div className="min-h-screen min-w-screen bg-gray-800	">
            <title>
              {portfolioData?.data.Name + portfolioData?.data.lastName + " |Portfolio"}
            </title>
            <section className="">
              <div className="h-40 flex justify-center items-center relative text-center">
                <h1
                  className="text-7xl sm:text-8xl text-slate-700  letter tracking-widest font-extrabold antialiased hover:subpixel-antialiased"
                >
                  WORK
                </h1>

                <p className="absolute flex">
                  <span className="text-4xl sm:text-5xl text-white font-extrabold">
                    My &nbsp;
                    <span className="text-amber-500 font-extrabold ">
                      Portfolio
                    </span>
                  </span>
                </p>
              </div>
              <AnnimationPage>
                <div className="w-100 py-10 px-10 text-center ">
                  <h1 className="text-2xl md:text-3xl font-semibold">Some of my awesome work</h1>
                </div>
              </AnnimationPage>
            </section>

            <section>
              <AnnimationPage>


                <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-36 md:pb-20 ">
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
                    {portfolioData?.data.portfolioInfo?.map((obj: { id: any; hexColor: any; bannerImage: string | StaticImport; heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; subHeading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
                      <a key={index} href={`${myParams.slug}/projectdetails/${obj.id}`} className="flex-1">
                        <div
                          className="border-slate-800 cursor-pointer p-4 border-2 rounded-2xl"
                          style={{
                            background: obj.hexColor,
                            height: "360px"
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "85%",
                              borderRadius: "10px",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              alt="Google Pic"
                              src={obj.bannerImage}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="w-full	h-full"
                            />
                          </div>
                          <div className="text-center text-white font-semibold capitalize text-xl py-1">
                            {obj.heading}
                          </div>
                          <div className="text-center text-white capitalize text-sm	">{obj.subHeading}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </AnnimationPage>
            </section>

          </div>
      }

       <Navbar id={id} currentPage={'portfolio'}/>
    </div>
  );
}
