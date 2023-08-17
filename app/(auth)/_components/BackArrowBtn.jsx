import Link from "next/link";

const BackArrowBtn = ({ url = "/" }) => {
  return (
    <Link href={url}>
      <div className="w-20 h-24 p-4 bg-white shadow justify-center items-center gap-4 inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <path
            d="M31.32 33.16L22.16 24L31.32 14.82L28.5 12L16.5 24L28.5 36L31.32 33.16Z"
            fill="black"
          />
        </svg>
      </div>
    </Link>
  );
};

export default BackArrowBtn;
