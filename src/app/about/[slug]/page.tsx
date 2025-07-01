/* eslint-disable react/jsx-no-undef */
"use client";
import { AnnimationPage } from "@/components/annimation";
import ExperienceCard from "@/components/ui/ExperienceCard/ExperienceCard";
import { useParams } from "next/navigation";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { fetchData } from "@/hooks/useApiData";
import { PuffLoader } from "react-spinners";
import ToolViews from "@/components/ui/ToolView/ToolView";
import CircularProgressBarWithImage from "@/components/ui/CircularProgressBarWithImage/CircularProgressBarWithImage";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/ui/Navbar/page";


export default function Page() {



  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState<any>(null);

  const myParams = useParams();
  console.log("myParams", myParams)
  const id = myParams.slug;



  useEffect(() => {

    const fetchDataAndUpdateState = async () => {
      try {
        const parsedId = parseInt(id as string || '');
        const profileId = !isNaN(parsedId) && Number.isInteger(parsedId) && parsedId < 4 && parsedId > 0 ? parsedId : 2;
        const data = await fetchData(profileId);
        setPortfolioData(data);
        console.log("Updated data:", data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchDataAndUpdateState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (


    <div>
      <title>
        {portfolioData?.data.Name + portfolioData?.data.lastName + " |About"}
      </title>
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
            <section>
              <div className="h-40 flex justify-center items-center relative">
                <h1 className="text-6xl sm:text-8xl text-center text-slate-700 font-extrabold antialiased hover:subpixel-antialiased">
                  RESUME
                </h1>

                <div className="absolute flex">
                  <p className="">
                    <span className="text-3xl sm:text-5xl text-white font-extrabold text-center">
                      ABOUT &nbsp;
                      <span className="text-amber-500">
                        ME
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </section>
            <AnnimationPage>
              <div className="container mx-auto  md:px-10 lg:px-20 pb-36 md:pb-20 mt-5">
                <section className="grid  grid-cols-1 lg:grid-cols-2 gap-5 pt-3 pb-24">
                  <section>
                    <h1>
                      <span className="text-2xl font-bold">PERSONAL INFOS</span>
                    </h1>

                    <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full  pt-4">
                      <div className="">
                        <span className="text-sm font-extralight">
                          First Name:{" "}
                          <span className="font-extrabold">
                            {portfolioData?.data.Name}
                          </span>
                        </span>
                      </div>
                      <div>
                        {" "}
                        <span className="text-xs sm:text-sm font-extralight">
                          Last Name:{" "}
                          <span className="font-extrabold">
                            {" "}
                            {portfolioData?.data.lastName}
                          </span>
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs sm:text-sm font-extralight">
                          Age:{" "}
                          <span className="font-extrabold">
                            {portfolioData?.data.Age}
                          </span>
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs sm:text-sm font-extralight">
                          Freelance:{" "}
                          <span className="font-extrabold text-green-500">
                            {" "}
                            {portfolioData?.data.freelance}
                          </span>
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs sm:text-sm font-extralight">
                          Phone:{" "}
                          <span className="font-extrabold">
                            {portfolioData?.data.phone}
                          </span>
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs sm:text-sm font-extralight">
                          Email:{" "}
                          <span className="font-extrabold">
                            {portfolioData?.data.email}
                          </span>
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs sm:text-sm font-extralight">
                          Discord (username):{" "}
                          <span className="font-extrabold">
                            {portfolioData?.data.discord}
                          </span>
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs sm:text-sm font-extralight">
                          Language:{" "}
                          <span className="font-extrabold">
                            {portfolioData?.data.languages}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-16 md:flex flex-row    ">
                      <div className="rounded-t-full">
                        <a
                          href={"files/" + portfolioData?.data.resume}
                          download={portfolioData?.data.resume}
                          className="  relative bg-amber-400 rounded-full overflow-hidden text-white font-bold border border-amber-400 bg-transparent text-center px-16 py-4 group "
                        >
                          <span className="stroke-white  px-7  absolute w-0 group-hover:w-full translate-all ease-out duration-700 h-full bg-amber-400 left-0 top-0 rounded-full">
                            <svg
                              className="w-6 h-11 font-extrabold bg-transparent -mx-3"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                              />
                            </svg>
                          </span>
                          
                          <span className="relative text-justify justify-normal ">
                            DOWNLOAD CV
                          </span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <ExperienceCard count={portfolioData?.data.experinces} label="years of experience" />
                      <ExperienceCard count={portfolioData?.data.acheivements} label="Achievements" />
                      <ExperienceCard count={portfolioData?.data.completed_project} label="Completed Projects" />
                      <ExperienceCard count={portfolioData?.data.happy_customer} label="Happy customer" />
                    </div>
                  </section>
                </section>

                <section className="text-center justify-center align-middle  ">
                  <div className="font-semibold text-3xl text-center justify-center align-middle ">
                    MY SKILLS
                  </div>
                </section>
                <section
                  className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-28 content-center items-center justify-center py-12"
                >
                  {portfolioData?.data.skills?.map((obj: { skill: string; rating: number; image: string; }) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="text-base lg:text-xl content-center font-extrabold h-full">
                        <CircularProgressBarWithImage title={obj.skill} rating={obj.rating} imageurl={obj.image} />
                      </div>
                    );
                  })}
                </section>



                {!!portfolioData?.data.testimonials && portfolioData?.data.testimonials.length > 0 &&

                  <section className="text-center justify-center align-middle">

                    <Testimonials testimonials={portfolioData?.data.testimonials} />

                  </section>
                }


                {
                  (!!portfolioData?.data.tools && portfolioData?.data.tools.length > 0) &&
                  <div>
                    <section className="text-center justify-center align-middle mt-24 ">
                      <div className="font-semibold text-3xl text-center justify-center align-middle ">
                        TOOLS
                      </div>
                    </section>



                    <section
                      className="grid grid-cols-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-10 py-12"
                    >
                      {portfolioData?.data.tools?.map((obj: { name: string; image: string; }) => {
                        return (
                          <div key={obj.name} className="text-base lg:text-xl content-center font-extrabold h-full">
                            <ToolViews name={obj.name} image={obj.image} />
                          </div>
                        );
                      })}
                    </section>
                  </div>
                }



                {!!portfolioData?.data.education && portfolioData?.data.education.length > 0 &&
                  <section className="pt-12">
                    <div className="font-semibold  text-3xl  text-center justify-center align-middle ">
                      EXPERIENCES & EDUCATION
                    </div>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                      {portfolioData?.data.education?.map((obj: { date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; source: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; desception: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => {
                        return (
                          <>
                            <div className="flex justify-start items-start gap-8">
                              <div>
                                <div className="flex justify-center items-center rounded-full w-10 h-10 bg-amber-400 ">
                                  <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                    />
                                  </svg>
                                </div>

                                <div
                                  className="bg-amber-100"
                                  style={{
                                    height: "50px",
                                    width: "1px",
                                    marginLeft: "20px",
                                  }}
                                ></div>
                              </div>

                              <div className="flex flex-col">
                                <div
                                  className="flex justify-center items-center px-8 py-2 w-fit grow-0 bg-slate-700 rounded-full text-xs font-bold text-white-500">
                                  {obj.date}
                                </div>
                                <div className="font-semibold text-xl sm:text-2xl capitalize caption-top mt-5">
                                  {obj.title}
                                  <a className="font-bold text-slate-300 text-sm sm:text-base px-2">
                                    {obj.source}
                                  </a>
                                  <p className="text-slate-300 font-semibold text-xs sm:text-sm pt-2">
                                    {obj.desception}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </section>
                  </section>
                }

              </div>
            </AnnimationPage>
          </div>
      }


      <Navbar id={id} currentPage={'about'}/>
    </div>
  );
}
