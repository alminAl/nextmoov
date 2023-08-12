const ServiceCard = ({ title }) => {
  return (
    <div className="p-5 shadow-md space-y-2">
      <p className="text-3xl font-bold">{title}</p>
      <ul className="list-disc list-inside">
        <li>Create personal dashboard.</li>
        <li>Organize your notes & workflows.</li>
        <li>5GB of space.</li>
      </ul>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section className="px-6 lg:px-12 py-11">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((i) => (
          <ServiceCard key={Math.random()} title={i} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;

const list = [
  "Tenancy Creation",
  "Referencing",
  "Rent Collection",
  "Rent Insurance",
  "Inventory",
  "Gas Safety",
  "Electrical Safety",
  "EPC",
  "Photography",
  "Building Insurance",
  "Deposit Protection",
  "Legal Checklist",
  "Offsite Tenancies",
  "Renewal Reminders",
  "Serve Notice",
];
