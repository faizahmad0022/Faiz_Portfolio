'use client';
import Navbar from "@/components/ui/Navbar/page";
import { fetchData } from "@/hooks/useApiData";
import { MailOpen, Map, Phone } from "lucide-react";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { BsArrow90DegDown, BsGithub, BsLinkedin, BsSkype, BsStackOverflow } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa6";
import PuffLoader from 'react-spinners/PuffLoader';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState<any>(null);// Initial state can be null
  const myParams = useParams();
  const id = myParams.slug;


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




  const notify = (msg: string) => {


    toast.error(msg,
      {
        position: "top-right",
        autoClose: 5079,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });



  };

  const notifySuccess = (msg: string) => {
    toast.success(msg,
      {
        position: "top-right",
        autoClose: 5079,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };

  const getIconFromType = (type: string) => {

    if (type === 'linkedin') {
      return <BsLinkedin />
    }
    // else if (type === 'skype') {
    //   return <BsSkype />
    // } 
    else if (type === 'github') {
      return <BsGithub />
    }
    else if (type === 'stackoverflow') {
      return <BsStackOverflow />
    }









    else {
      return <BsArrow90DegDown />
    }

  }





  const handleClick = async () => {

    if (!!name == false) {
      notify("Please provide Name");
    } else if (!!email === false) {
      notify("Please provide Email");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      notify("Please provide valid Email");
    } else if (!!subject === false) {
      notify("Please provide Subject");
    } else if (!!msg === false) {
      notify("Please provide Msg")

    } else {
      //TODO Function which send the email!
      notifySuccess("Email sent successfully!")

      setName('');
      setEmail('');
      setSubject('');
      setMsg('');
    }
  }





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
          <div>
            <title>
              {portfolioData?.data.Name + portfolioData?.data.lastName + " |Profile"}
            </title>
            <div className="min-h-screen min-w-screen bg-gray-800">
              <div className="flex justify-center items-center relative py-14">
                <h1 className="text-6xl sm:text-8xl text-center text-slate-700 font-extrabold antialiased hover:subpixel-antialiased">
                  CONTACT
                </h1>

                <p className="absolute flex">
                  <span className="text-3xl sm:text-5xl text-white font-extrabold text-center">
                    GET IN &nbsp;
                    <span className="text-amber-500">TOUCH</span>
                  </span>
                </p>
              </div>

              <section className="container mx-auto px-5 md:px-10 lg:px-20 pb-36 md:pb-20 mt-5">
                <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-10">
                  <div className="col-span-12 lg:col-span-5">
                    <div className="text-3xl font-semibold">DONT BE SHY !</div>
                    <div className="text-sm mt-3">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities to be
                      part of your visions.
                    </div>
                    <div className="flex justify-start items-start">
                      <div className="flex flex-col w-full">
                        <div className="flex flex-auto mt-5">
                          <div>
                            <Map
                              size={50}
                              color="#f59e0b"
                              strokeWidth={2.5}
                            />
                          </div>

                          <div className="ml-4">
                            <span className="text-sm font-thin">ADDRESS POINT</span>
                            <p className="text-sm font-medium">{portfolioData?.data.address}</p>
                          </div>
                        </div>
                        <div className="flex flex-auto mt-5">
                          <Phone
                            size={50}
                            color="#f59e0b"
                            strokeWidth={2.5}
                          />

                          <div className="ml-4">
                            <span className="text-sm font-thin">CALL</span>
                            <p className="text-sm font-medium">{portfolioData?.data.phone}</p>
                          </div>
                        </div>
                        <div className="flex flex-auto  mt-5  ">
                          <MailOpen
                            size={50}
                            color="#f59e0b"
                            strokeWidth={2.5}
                          />

                          <div className="ml-4">
                            <span className="text-sm font-thin">EMAIL</span>
                            <p className="text-sm font-medium">{portfolioData?.data.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 mt-5 md:mt-8">




                      {portfolioData?.data.contactInfo?.map((obj: { id: string; type: string; url: string; icon: string }) => (
                        <Link key={obj.id} href={obj.url} target="_blank" rel="noopener noreferrer">
                          <div className="flex justify-center items-center rounded-full w-10 h-10 transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300">
                            {getIconFromType(obj.type)}
                          </div>
                        </Link>
                      ))}

                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-7">
                    <form>
                      <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6">
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                            className="w-full px-4 py-2 bg-slate-600 shadow-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 rounded-full sm:text-sm focus:ring-2"
                            placeholder="YOUR NAME"
                          />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                            className="w-full px-4 py-2 bg-slate-600 shadow-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 rounded-full sm:text-sm focus:ring-2"
                            placeholder="you@example.com"
                          />
                        </div>

                        <div className="col-span-12">
                          <input
                            type="text"
                            name="name"
                            required
                            value={subject}
                            onChange={(event) => {
                              setSubject(event.target.value);
                            }}
                            className=" px-4 py-2 bg-slate-600 shadow-sm text-white  placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 block w-full h-11 rounded-full sm:text-sm focus:ring-2"
                            placeholder="YOUR SUBJECT"
                          />
                        </div>

                        <div className="col-span-12">
                          <textarea
                            name="message"
                            id=""
                            rows={10}
                            value={msg}
                            onChange={(event) => {
                              setMsg(event.target.value);
                            }}
                            placeholder="HOW CAN I HELP YOU"
                            className="px-4 py-4 bg-slate-600 shadow-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 block w-full rounded-3xl sm:text-sm focus:ring-2"
                          />
                        </div>
                      </div>
                      <button
                        className="mt-8"
                        type="submit"
                        onClick={handleClick}
                      >
                        <a
                          href="#_"
                          className="relative w-56 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group "
                        >
                          <span className="absolute inset-0 flex items-center justify-center gap-2 w-full h-full text-black duration-500 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                            <span>SEND MESSAGE</span>
                            <FaPaperPlane />
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-white  duration-300 transform group-hover:translate-x-full ease transition-all ">{" SEND MESSAGE"}</span>
                          <span className="relative invisible">T</span>
                        </a>
                      </button>
                      <ToastContainer />
                    </form>
                  </div>
                </div>
              </section>
            </div>


          </div>
      }

      <Navbar id={id} currentPage={'contact'} />
    </div>
  );
}


