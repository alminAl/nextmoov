"use client";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Property = () => {
  return (
    <section>
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div>
            {[...new Array(3)].map((i, idx) => (
              <SwiperSlide key={Math.random()}>
                <div className="h-64 w-full bg-gray-100">Image {idx+1}</div>
              </SwiperSlide>
            ))}
          </div>
          <div className="flex px-3 justify-between absolute top-1/2 -translate-y-1/2 w-full z-10">
            <div className="swiper-button-prev bg-white p-2 text-3xl shadow-md rounded-xl cursor-pointer">
              <GrFormPrevious />
            </div>
            <div className="swiper-button-next bg-white p-2 text-3xl shadow-md rounded-xl cursor-pointer">
              {" "}
              <GrFormNext />
            </div>
          </div>
        </Swiper>
      </div>

      <div className="p-4 w-fit">
        <p className="font-bold">Flat Number+Address+Town+Postcode</p>
        <div className="space-x-4">
          <span>2000 sqft</span>
          <span>4 bed</span>
          <span>2 bath</span>
        </div>
        <div className="flex space-x-36">
          <div>
            <p>Monthly</p>
            <p className="font-bold">£1000</p>
          </div>
          <div>
            <p>Deposit (5w)</p>
            <p className="font-bold">£2000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SeeAllButton = () => {
  return (
    <button className="flex p-4 h-fit bg-black text-white space-x-4">
      <span>See All</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
          fill="#7AE1BF"
        />
      </svg>
    </button>
  );
};

// default component
const FeaturePropertySection = () => {
  return (
    <div className="px-6 space-y-8 mb-10 lg:px-12">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          Some of our available and <br /> recently let properties
        </h1>
        <div className="hidden lg:inline-block">
          <SeeAllButton />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3  lg:gap-4">
        <Property />
        <Property />
        <Property />
      </div>
      <div className="lg:hidden">
        <SeeAllButton />
      </div>
    </div>
  );
};

export default FeaturePropertySection;
