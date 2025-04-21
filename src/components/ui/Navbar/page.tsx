import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavbarProps {
  id: any;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ id, currentPage = 'profile' }) => {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState<string>('');

  useEffect(() => {
       setActivePage(currentPage);
  }, [])
  return (

    <><section className="hidden lg:flex fixed top-0 right-0 min-h-screen justify-center items-center pr-5">
      <div className="flex flex-col py-6 items-end">
        <div className="flex">
          <Link href={`/profile/${id}`}>
            <div className={`flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110
              ${activePage === 'profile' ? 'bg-amber-500' : 'bg-gray-500'
              } hover:bg-amber-400 duration-300 group`}>
              <p className="hidden group-hover:flex text-lg font-bold">
                Profile
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="flex mt-8">
          <Link href={`/about/${id}`}>
            <div className={`flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110
              ${activePage === 'about' ? 'bg-amber-500' : 'bg-gray-500'
              }
              
              hover:bg-amber-400 duration-300 group `}>
              <p className="hidden group-hover:flex text-lg font-bold">
                About
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="flex mt-8">
          <Link href={`/portfolio/${id}`}>
            <div className={`flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110
              ${activePage === 'portfolio' ? 'bg-amber-500' : 'bg-gray-500'
              } hover:bg-amber-400 duration-300 group`}>
              <p className="hidden group-hover:flex text-lg font-bold">
                Portfolio
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="flex mt-8">
          <Link href={`/contact/${id}`}>
            <div className={`flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110
              ${activePage === 'contact' ? 'bg-amber-500' : 'bg-gray-500'
              } hover:bg-amber-400 duration-300 group`}>
              <p className="hidden group-hover:flex text-lg font-bold">
                Contact
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-open"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>

      <section className="fixed lg:hidden bottom-0 left-0 bg-slate-500 w-full py-3">
        <div className="flex justify-evenly">
          <Link href={`/profile/${id}`}>
            <div className={` rounded-full w-12 h-12 flex justify-center
             ${activePage === 'profile' ? 'bg-amber-500' : 'bg-gray-500'
              } items-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </Link>

          <Link href={`/about/${id}`}>
            <div className={`rounded-full w-12 h-12 flex justify-center
            ${activePage === 'about' ? 'bg-amber-500' : 'bg-gray-500'
              } items-center`} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </Link>

          <Link href={`/portfolio/${id}`}>
            <div className={` rounded-full w-12 h-12 flex justify-center
            ${activePage === 'portfolio' ? 'bg-amber-500' : 'bg-gray-500'
              } items-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
          </Link>

          <Link href={`/contact/${id}`}>
            <div className={` rounded-full w-12 h-12 flex justify-center ${activePage === 'contact' ? 'bg-amber-500' : 'bg-gray-500'
              } items-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-open"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
            </div>
          </Link>
        </div>
      </section></>
  );
};

export default Navbar;


