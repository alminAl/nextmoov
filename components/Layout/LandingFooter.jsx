import Image from "next/image";
import Logo from "./@media/Logo.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

const LandingFooter = () => {
  return (
    <footer className="sticky top-[100vh]">
      <div className="bg-footer-texture py-20 bg-black bg-no-repeat bg-bottom">
        <div className="space-y-4 px-6 lg:px-12 lg:flex lg:justify-between">
          <div className="space-y-4">
            <Image src={Logo} alt="next-moov" />
            <div className="flex space-x-4">
              <div className="text-white text-3xl w-fit p-1 rounded-full">
                <BiLogoFacebookCircle />
              </div>
              <div className="text-white text-3xl w-fit p-1 rounded-full">
                <AiOutlineTwitter />
              </div>
              <div className="text-white text-3xl w-fit p-1 rounded-full">
                <FiInstagram />
              </div>
              <div className="text-white text-3xl w-fit p-1 rounded-full">
                <AiFillLinkedin />
              </div>
            </div>
            <p className="text-white">
              © {new Date().getFullYear()}. All rights reserved to nextmoov PLC.
            </p>
          </div>
          {/* link */}
          <div className="text-white flex  flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
            <Link href={"/"}>
              <p>Our Company</p>
            </Link>
            <Link href={"/"}>
              <p>Terms & Conditions</p>
            </Link>
            <Link href={"/"}>
              <p>Privacy policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
