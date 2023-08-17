import LandingFooter from "./_components/Layout/LandingFooter";
import LandingTopNavbar from "./_components/Layout/LandingTopNavbar";

export default function Template({ children }) {
  return (
    <div className="min-h-screen">
      <LandingTopNavbar />
      <main>{children}</main>
      <LandingFooter />
    </div>
  );
}
