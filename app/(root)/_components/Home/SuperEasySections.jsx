const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="space-y-4">
      {icon}
      <p className="font-bold">{title}</p>
      <p className="text-nm-gray-100">{description}</p>
    </div>
  );
};

// default component
const SuperEasySections = () => {
  return (
    <section className="px-6 py-24 space-y-6 lg:px-12">
      <div>
        <h1 className="text-4xl font-bold">Super Easy Property listing </h1>
      </div>
      <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
        <div>
          <InfoCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M6.66634 25.3333H25.333V28H6.66634V25.3333ZM15.9997 22.6667C10.1086 22.6667 5.33301 17.8911 5.33301 12C5.33301 6.10896 10.1086 1.33334 15.9997 1.33334C21.8907 1.33334 26.6663 6.10896 26.6663 12C26.6663 17.8911 21.8907 22.6667 15.9997 22.6667ZM15.9997 20C20.4179 20 23.9997 16.4183 23.9997 12C23.9997 7.58172 20.4179 4 15.9997 4C11.5814 4 7.99967 7.58172 7.99967 12C7.99967 16.4183 11.5814 20 15.9997 20Z"
                  fill="black"
                />
              </svg>
            }
            title="Sign Up"
            description={
              "Simply provide us with your property or room details, and we’ll make sure potential tenants know your place is available. We will put potential tenants is touch with you- you handle the viewings."
            }
          />
          <button className="flex p-4 my-2 bg-black text-white space-x-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 19L19 19V21L5 21L5 19ZM12 17C7.58172 17 4 13.4183 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 13.4183 16.4183 17 12 17ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                fill="#7AE1BF"
              />
            </svg>
            <span>Get Started</span>
          </button>
        </div>

        <div>
          <InfoCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.3333 26.6626V14.3943L16 7.03159L6.66667 14.3943V26.6626H25.3333ZM28 29.3307C28 29.3307 27.4031 29.3293 26.6667 29.3293H5.33333C4.59696 29.3293 4 29.3307 4 29.3307V13.7478C4 13.3396 4.18703 12.9538 4.50753 12.701L15.1743 4.28651C15.6584 3.9045 16.3416 3.9045 16.8257 4.28651L27.4924 12.701C27.8129 12.9538 28 13.3396 28 13.7478V29.3307ZM9.33333 17.3293H12C12 19.5385 13.7908 21.3293 16 21.3293C18.2092 21.3293 20 19.5385 20 17.3293H22.6667C22.6667 21.0112 19.6819 23.996 16 23.996C12.3181 23.996 9.33333 21.0112 9.33333 17.3293Z"
                  fill="black"
                />
              </svg>
            }
            title="Add Your Property & Advertise"
            description={
              "We can also reference your tenants, put together the contract and handle the deposit."
            }
          />
        </div>
        <div>
          <InfoCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M11.5 13C12.8807 13 14 11.8807 14 10.5C14 9.11929 12.8807 8 11.5 8C10.1193 8 9 9.11929 9 10.5C9 11.8807 10.1193 13 11.5 13ZM11.5 15C9.01472 15 7 12.9853 7 10.5C7 8.01472 9.01472 6 11.5 6C13.9853 6 16 8.01472 16 10.5C16 12.9853 13.9853 15 11.5 15ZM22 17C23.1046 17 24 16.1046 24 15C24 13.8954 23.1046 13 22 13C20.8954 13 20 13.8954 20 15C20 16.1046 20.8954 17 22 17ZM22 19C19.7909 19 18 17.2091 18 15C18 12.7909 19.7909 11 22 11C24.2091 11 26 12.7909 26 15C26 17.2091 24.2091 19 22 19ZM24.5 25V24.5C24.5 23.1193 23.3807 22 22 22C20.6193 22 19.5 23.1193 19.5 24.5V25H17.5V24.5C17.5 22.0147 19.5147 20 22 20C24.4853 20 26.5 22.0147 26.5 24.5V25H24.5ZM14.5 25V21C14.5 19.3431 13.1568 18 11.5 18C9.84315 18 8.5 19.3431 8.5 21V25H6.5V21C6.5 18.2386 8.73858 16 11.5 16C14.2614 16 16.5 18.2386 16.5 21V25H14.5Z"
                  fill="black"
                />
              </svg>
            }
            title="Find the the Perfect tenants"
            description={
              "We’re here every step of the way, to make letting your property as straight forward as possible."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SuperEasySections;
