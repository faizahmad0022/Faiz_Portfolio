/* eslint-disable react/jsx-no-undef */
"use client";
import CarouselSlideShow from "@/components/CarouselSlideShow";
import LinkCard from "@/components/component/link-card";
import { ReviewCard } from "@/components/component/review-card";
import ImageCard from "@/components/component/tool-card";
import Navbar from "@/components/ui/Navbar/page";
import { fetchProjectdetails } from "@/hooks/useApiData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
const imageUrls = [
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp',
  'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp',
];
const links = [
  {
    image: "https://example.com/image1.jpg",
    name: "PLAY STORE",
    url: "https://www.example1.com",

  },
  {
    image: "https://example.com/image2.jpg",
    name: "APPLE STORE",
    url: "https://www.example2.com",
  },
  // ... add more links as needed
];


export default function Page() {

  const [loading, setLoading] = useState(true);
  const [projectdetailsdata, setprojectdetailsdata] = useState<any>(null);

  const myParams = useParams();
  console.log("myParams", myParams)
  const id = myParams.slug;
  const projectId = myParams.id;
  console.log("asadid;", id);
  console.log("asadprojectId;", projectId);
  const images = [
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      alt: "Motorbike Smoke",
      label: "First slide label",
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      alt: "Mountaintop",
      label: "Second slide label",
    },
    {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
      alt: "Woman Reading a Book",
      label: "Third slide label",
    },
    // Add more images here as needed
  ];


  useEffect(() => {

    const fetchDataAndUpdateState = async () => {
      try {
        const parsedId = parseInt(id as string || '');
        const ProjectDetailsid = parseInt(projectId as string || '');
        const profileId = !isNaN(parsedId) && Number.isInteger(parsedId) && parsedId < 4 && parsedId > 0 ? parsedId : 2;
        const data = await fetchProjectdetails(profileId, ProjectDetailsid);
        setprojectdetailsdata(data);
        console.log("Updated data:", data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchDataAndUpdateState();
  }, [id]);
  return (


    <div>
      <title>
      {" Projectdetails"}
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


          <div className="flex flex-col min-h-screen bg-gray-800 relative">
            <div className="flex max-w-[850px] mx-auto mt-7   h-[600px]">
              <CarouselSlideShow images={(!!projectdetailsdata?.data?.images) ? (projectdetailsdata?.data?.images) : (images)} />
            </div>
            <section className="flex flex-col w-full  p-8 md:p-14">
              <div className="bg-gray-700 rounded-2xl p-4 md:p-6">
                <h1 className="font-extrabold text-3xl md:text-4xl mb-3">{(!!projectdetailsdata?.data?.heading) ? (projectdetailsdata?.data?.heading) : (imageUrls)}</h1>
                <h2 className="font-normal text-base md:text-3xl ">{(!!projectdetailsdata?.data?.subHeading) ? (projectdetailsdata?.data?.subHeading) : ("")}</h2>
                <p className="text-white text-base md:text-lg mt-9">
                  {projectdetailsdata?.data?.description ? (
                    <p>{projectdetailsdata?.data?.description}</p>
                  ) : (
                    <p>To conditionally render the component based on the presence of props, you can check if the projectdetailsdata?.data?.description exists and render it if it does, otherwise render a default message.</p>
                  )}


                </p>
              </div>
            </section>
            <div className="flex flex-col sm:flex-row py-12 gap-5 justify-evenly mt-auto sm:mb-5 mb-16">


              <ReviewCard
                name={(projectdetailsdata?.data?.clientInfo?.name) ?? ('NULL')}
                imageUrl={(projectdetailsdata?.data?.clientInfo?.image) ? (projectdetailsdata?.data?.clientInfo?.image) : ('https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp')}
                role={(projectdetailsdata?.data?.clientInfo?.subHeading) ? (projectdetailsdata?.data?.clientInfo?.subHeading) : ('CTO')}
                rating={(projectdetailsdata?.data?.clientInfo?.rating) ? (projectdetailsdata?.data?.clientInfo?.rating) : ('4.0')}
                description={(projectdetailsdata?.data?.clientInfo?.comment) ? (projectdetailsdata?.data?.clientInfo?.comment) : ('John is a skilled software engineer with a passion for building innovative solutions. He has extensive experience in full-stack development and is always eager to learn new technologies.')}
              />
              <LinkCard links={(projectdetailsdata?.data?.links) ? (projectdetailsdata?.data?.links) : (links)} title="LINK" />


              <ImageCard
                images={(projectdetailsdata?.data?.tools) ? (projectdetailsdata?.data?.tools) : ("")}
                
              />







            </div>

          </div>



      }


      <Navbar id={id} currentPage={'portfolio'} />
    </div>
  );
}
