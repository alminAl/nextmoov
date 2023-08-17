// default component
const LoginPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold h-14 w-full">Log in</h1>

      <div className="relative text-neutral-600 text-xl shadow  w-96">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M2 5.5H22C22 5.5 22 5.84823 22 6.27778V18.7222C22 19.1518 22 19.5 22 19.5H3.00002C2.44774 19.5 2.00002 19.5 2.00002 19.5V6.27778C2.00002 5.84823 2 5.5 2 5.5ZM20 8.79616L12.0718 14.3184L4.00002 8.77906V17.9444H20V8.79616ZM4.51148 7.05556L12.0619 12.2371L19.501 7.05556H4.51148Z"
              fill="#7AE1BF"
            />
          </svg>
        </div>
        <input
          className="block w-full p-4 pl-14 text-sm   bg-white focus:outline-none focus:border focus:ring-slate-200 focus:border-slate-200"
          placeholder="Email"
        />
      </div>
   
    </>
  );
};

export default LoginPage;
