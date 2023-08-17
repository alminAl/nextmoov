import { AuthButton } from "../Layout/LandingTopNavbar";
import { AiOutlineCheck } from "react-icons/ai";

const IntroContent = () => {
  return (
    <div className="space-y-7">
      <h1 className="text-4xl font-bold">
        We connect  landlords & tenants
      </h1>
      <p className="text-xl">The {"UK's"} latest Prop Tech platform.</p>
      <AuthButton />
    </div>
  );
};

const HowToStartContent = () => {
  return (
    <div className="h-96 bg-white flex-col justify-start items-start inline-flex">
      <div className="self-stretch h-20 px-4 justify-between items-center gap-8 inline-flex">
        <div className="grow shrink basis-0 self-stretch border-b border-emerald-300 justify-center items-center flex">
          <div className="justify-start items-start gap-1 flex">
            <div className="text-black text-sm font-bold tracking-tight">
              Landlords
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
          <div className="justify-start items-start gap-1 flex">
            <div className="text-neutral-600 text-sm font-bold tracking-tight">
              Tenants
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-80 shadow flex-col justify-start items-start flex">
        <div className="self-stretch h-16 bg-white flex-col justify-center items-end flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="w-16 self-stretch flex-col justify-start items-center inline-flex">
              <div className="w-0.5 grow shrink basis-0 pt-6" />
              <div className="justify-center items-center inline-flex">
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute bg-emerald-300 rounded-full" />
                  <div className="w-4 h-4 left-[10px] top-[10px] absolute justify-center items-center inline-flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="w-0.5 grow shrink basis-0 pt-2 bg-black justify-center items-start inline-flex" />
            </div>
            <div className="grow shrink basis-0 py-4 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch h-5 flex-col justify-start items-start flex">
                <div className="self-stretch text-black text-sm font-bold tracking-tight">
                  Add Property
                </div>
              </div>
            </div>
            <div className="w-4 h-16 relative" />
          </div>
        </div>
        <div className="self-stretch h-16 bg-white flex-col justify-center items-end flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="w-16 self-stretch flex-col justify-start items-center inline-flex">
              <div className="w-0.5 grow shrink basis-0 pt-6 bg-black justify-center items-start inline-flex" />
              <div className="justify-center items-center inline-flex">
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute bg-emerald-300 rounded-full" />
                  <div className="w-4 h-4 left-[10px] top-[10px] absolute justify-center items-center inline-flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
              <div className="w-0.5 grow shrink basis-0 pt-2 bg-black justify-center items-start inline-flex" />
            </div>
            <div className="grow shrink basis-0 py-4 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch h-5 flex-col justify-start items-start flex">
                <div className="self-stretch text-black text-sm font-bold tracking-tight">
                  Feature it in different platforms
                </div>
              </div>
            </div>
            <div className="w-4 h-16 relative" />
          </div>
        </div>
        <div className="self-stretch h-16 bg-white flex-col justify-center items-end flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="w-16 self-stretch flex-col justify-start items-center inline-flex">
              <div className="w-0.5 grow shrink basis-0 pt-6 bg-black justify-center items-start inline-flex" />
              <div className="justify-start items-start inline-flex">
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute bg-emerald-300 rounded-full" />
                  <div className="w-7 h-7 left-[4px] top-[4px] absolute text-center text-white text-base font-normal leading-tight">
                    2
                  </div>
                </div>
              </div>
              <div className="w-0.5 grow shrink basis-0 pt-2 bg-gray-200 justify-center items-start inline-flex" />
            </div>
            <div className="grow shrink basis-0 py-4 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch h-5 flex-col justify-start items-start flex">
                <div className="self-stretch text-black text-sm font-bold tracking-tight">
                  Schedule tenant appointment
                </div>
              </div>
            </div>
            <div className="w-4 h-16 relative" />
          </div>
        </div>
        <div className="self-stretch h-16 bg-white flex-col justify-center items-end flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="w-16 self-stretch flex-col justify-start items-center inline-flex">
              <div className="w-0.5 grow shrink basis-0 pt-2 bg-gray-200 justify-center items-start inline-flex" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch h-16 flex-col justify-start items-start flex">
                <div className="self-stretch grow shrink basis-0 text-neutral-600 text-base font-normal">
                  Praesent condimentum ante ac ipsum aliquam, ac scelerisque
                  velit sagittis.
                </div>
              </div>
            </div>
            <div className="w-4 h-16 relative" />
          </div>
        </div>
        <div className="self-stretch h-16 bg-white flex-col justify-center items-end flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="w-16 self-stretch flex-col justify-start items-center inline-flex">
              <div className="w-0.5 grow shrink basis-0 pt-6 bg-gray-200" />
              <div className="justify-start items-start inline-flex">
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute bg-emerald-300 rounded-full" />
                  <div className="w-7 h-7 left-[4px] top-[4px] absolute text-center text-white text-base font-normal leading-tight">
                    3
                  </div>
                </div>
              </div>
              <div className="w-0.5 grow shrink basis-0 pt-2" />
            </div>
            <div className="grow shrink basis-0 py-4 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch h-5 flex-col justify-start items-start flex">
                <div className="self-stretch text-black text-sm font-bold tracking-tight">
                  Find the perfect Tenant
                </div>
              </div>
            </div>
            <div className="w-4 h-16 relative" />
          </div>
        </div>
      </div>
    </div>
    // <div className="mx-auto shadow-md lg:w-[427px]">
    //   <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
    //     <ul className="flex flex-wrap justify-center -mb-px">
    //       <li className="mr-2">
    //         <button className="inline-block px-10 py-4 text-nm-gray-100 font-bold border-b-2 border-nm-green-100 rounded-t-lg active">
    //           Landlords
    //         </button>
    //       </li>
    //       <li className="mr-2">
    //         <button className="inline-block px-10 py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
    //           Tenants
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="pl-6 py-4">
    //     <ol className="relative text-gray-500 border-l border-gray-200">
    //       <li className="mb-10 ml-6 space-x-1 flex items-center">
    //         <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
    //           <AiOutlineCheck />
    //         </span>
    //         <h3 className="text-sm font-bold leading-tight">Add Property</h3>
    //       </li>
    //       <li className="mb-10 ml-6 space-x-1 flex items-center">
    //         <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
    //           <AiOutlineCheck />
    //         </span>
    //         <h3 className="text-sm font-bold leading-tight">
    //           Feature it in different platforms
    //         </h3>
    //       </li>
    //       <li className="mb-10 ml-6 space-x-1 ">
    //         <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
    //           <AiOutlineCheck />
    //         </span>
    //         <h3 className="text-sm font-bold leading-tight">
    //           Schedule tenant appointment
    //         </h3>
    //         <p className="text-sm">
    //           Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit
    //           sagittis.
    //         </p>
    //       </li>
    //       <li className="mb-10 ml-6 space-x-1 flex items-center">
    //         <span className="absolute flex items-center justify-center w-8 h-8 text-white bg-nm-green-100 rounded-full -left-4 ring-4 ring-white">
    //           <AiOutlineCheck />
    //         </span>
    //         <h3 className="text-sm font-bold leading-tight">
    //           Find the perfect Tenant
    //         </h3>
    //       </li>
    //     </ol>
    //   </div>
    // </div>
  );
};

// main component
const HeroSection = () => {
  return (
    <section className="px-6 py-4  lg:px-12">
      <div className="w-full lg:grid lg:grid-cols-2">
        <div className="lg:w-1/2">
          <IntroContent />
        </div>
        <div className="lg:w-1/2">
          <HowToStartContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
