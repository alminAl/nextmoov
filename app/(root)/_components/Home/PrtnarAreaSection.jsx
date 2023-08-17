import Image from "next/image";
import RM from "./@media/right_move.png";
import PL from "./@media/prime_location.png";
import ZOO from "./@media/zoopia.png";

const PrtnarAreaSection = () => {
  return (
    <section className="px-6 py-16 lg:px-12">
      <div className="flex space-x-8">
        <Image src={RM} alt="right_move" />
        <Image src={PL} alt="prime_location" />
        <Image src={ZOO} alt="zoopia" />
      </div>
    </section>
  );
};

export default PrtnarAreaSection;
