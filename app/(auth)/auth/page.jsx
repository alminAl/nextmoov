import BackArrowBtn from "../_components/BackArrowBtn";
import LoginBtn from "../_components/LoginBtn";
import SignupBtn from "../_components/SignupBtn";

const AuthPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-black text-4xl font-bold">Your nextmoov</h1>
      <div className="flex space-x-8">
        <BackArrowBtn />
        <LoginBtn url="/login"/>
        <SignupBtn />
      </div>
    </div>
  );
};

export default AuthPage;
