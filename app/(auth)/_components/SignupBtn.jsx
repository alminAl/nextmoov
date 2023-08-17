import Link from "next/link";

const SignupBtn = ({ url = "/" }) => {
  return (
    <Link href={url}>
      <div className="w-80 h-24 px-12 py-6 bg-white shadow flex justify-between items-center">
        <div className="text-black text-xl font-bold tracking-tight">
          Sign Up Now
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M17.1797 33.16L26.3397 24L17.1797 14.82L19.9997 12L31.9997 24L19.9997 36L17.1797 33.16Z"
            fill="black"
          />
        </svg>
      </div>
    </Link>
  );
};

export default SignupBtn;
