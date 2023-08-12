const BasicPrice = ({ packageName, price, list = [], isMostSell }) => {
  return (
    <div className={`${!isMostSell && "bg-white"}  p-6 space-y-6`}>
      <div className="text-2xl font-bold flex justify-between">
        <span>{packageName}</span>
        {isMostSell && <span>Most Popular</span>}
      </div>

      {price === 0 && <p className="text-4xl font-bold">Free</p>}
      {price > 0 && (
        <div className="felx">
          <span className="text-4xl font-bold items-stretch">£{price} </span>
          <span className="text-gray-400 text-xs self-stretch">+VAT</span>
        </div>
      )}
      
      <ul className="space-y-1 text-nm-gray-100 list-disc pl-5">
        {list.map((i) => (
          <li key={Math.random()}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

const PackageSection = () => {
  return (
    <div className="px-6 py-20 lg:py-32 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-3">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Choose the perfect <br /> package for you
          </h2>
        </div>
        <div className="space-y-8">
          <BasicPrice packageName="Light" price={0} list={P1} />
          <BasicPrice packageName="Landlord Pro" price={19} list={P2} />
        </div>
        <div className="bg-nm-green-100">
          <BasicPrice
            packageName="Landlord Pro+"
            price={19}
            list={P3}
            isMostSell={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageSection;

const P1 = ["90 Days Advertising on NextMoov"];
const P2 = [
  "90 Days Advertising on NextMoov",
  "90 Days Advertising on Rightmove",
  "Landlords dashboard to manage all enquiries and contact via dashboard",
];
const P3 = [
  "90 Days Advertising on NextMoov",
  "90 Days Advertising on Rightmove",
  "Landlords dashboard to manage all enquiries and contact via dashboard",
  "Viewing Organiser",
  "Managing Tenancy Offers",
  "Tenant Comparison and Selection",
  "Tenant Referencing Forms",
  "Contract Drafting, Digital Signature & Contract Management with DocuSign",
];
