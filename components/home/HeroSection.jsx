import { AuthButton } from "../Layout/LandingTopNavbar";
import { AiOutlineCheck } from "react-icons/ai";


// main component
const HeroSection = () => {
  return (
    <div className="mt-10 space-y-10 px-6 py-4 lg:space-y-0 lg:flex  lg:px-12">
      <div className="space-y-7">
        <h1 className="text-4xl font-bold">
          We connect <br /> landlords & tenants
        </h1>
        <p className="text-xl">The {"UK's"} latest Prop Tech platform.</p>
        <AuthButton />
      </div>

      <div className="mx-auto shadow-md lg:w-[427px]">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap justify-center -mb-px">
            <li className="mr-2">
              <button className="inline-block px-10 py-4 text-nm-gray-100 font-bold border-b-2 border-nm-green-100 rounded-t-lg active">
                Landlords
              </button>
            </li>
            <li className="mr-2">
              <button className="inline-block px-10 py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                Tenants
              </button>
            </li>
          </ul>
        </div>
        <div className="pl-6 py-4">
          <ol className="relative text-gray-500 border-l border-gray-200">
            <li className="mb-10 ml-6 space-x-1 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
                <AiOutlineCheck />
              </span>
              <h3 className="text-sm font-bold leading-tight">Add Property</h3>
            </li>
            <li className="mb-10 ml-6 space-x-1 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
                <AiOutlineCheck />
              </span>
              <h3 className="text-sm font-bold leading-tight">
                Feature it in different platforms
              </h3>
            </li>
            <li className="mb-10 ml-6 space-x-1 ">
              <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
                <AiOutlineCheck />
              </span>
              <h3 className="text-sm font-bold leading-tight">
                Schedule tenant appointment
              </h3>
              <p className="text-sm">
                Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit
                sagittis.
              </p>
            </li>
            <li className="mb-10 ml-6 space-x-1 flex items-center">
              <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
                <AiOutlineCheck />
              </span>
              <h3 className="text-sm font-bold leading-tight">
                Find the perfect Tenant
              </h3>
            </li>
          </ol>
        </div>
      </div>
     
    </div>
  );
};

export default HeroSection;
