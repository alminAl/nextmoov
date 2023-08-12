import { Avatar } from "@mui/joy";

const ReviewCard = ({ name, coment }) => {
  return (
    <div className="space-y-8 px-10 py-20 shadow-md">
      <p className="text-nm-gray-100">{coment}</p>
      <div className="flex space-x-4">
        <Avatar alt={name} src="#" />
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p>Client</p>
        </div>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="px-6 py-20 space-y-10 lg:py-32 lg:px-12">
      <div className="text-center">
        <p className="text-sm">SATISFIED</p>
        <h2 className="text-4xl font-bold">Reviews from our landlords</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {[...new Array(3)].map((i) => (
          <ReviewCard
            key={Math.random()}
            name={"Lara Madrigal"}
            coment="We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. "
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
