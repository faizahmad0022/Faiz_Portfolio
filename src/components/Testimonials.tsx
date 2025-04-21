import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
  stars: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[]; // Make testimonials optional
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = [] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -440,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 420,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
        <p className="mb-12 text-neutral-600 dark:text-neutral-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div className="flex items-center justify-between  md:p-3 overflow-x-auto">
        <button onClick={handleScrollLeft} className="btn pr-4 hidden md:block">
          <CircleArrowLeft />
        </button>
        <div ref={scrollRef} className="flex flex-nowrap gap-6 lg:gap-12 w-full overflow-x-auto md:overflow-x-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none w-full md:w-96 bg-slate-950 rounded-lg shadow-md">
              <div className="p-6">
                <picture>
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-24 h-24 mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/30"
                  />
                </picture>
                <h5 className="mb-2 text-xl font-semibold">{testimonial.name}</h5>
                <h6 className="mb-2 font-semibold text-primary dark:text-primary-400">{testimonial.role}</h6>
                <p className="mb-4 text-neutral-600 dark:text-neutral-300">{testimonial.text}</p>
                <ul className="flex items-center justify-center mb-2">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <li key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleScrollRight} className="btn pl-4 hidden md:block">
          <CircleArrowRight />
        </button>
      </div>
    </>
  );
};

export default Testimonials;
