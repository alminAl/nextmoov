import LandingTopNavbar from "@/components/Layout/LandingTopNavbar";
import "./globals.css";
import { Manrope } from "next/font/google";
import LandingFooter from "@/components/Layout/LandingFooter";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Nextmoon",
  description: "Nextmoon Official Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className} suppressHydrationWarning={true}>
        <div className="min-h-screen">
          <LandingTopNavbar />
          {children}
          <LandingFooter />
        </div>
      </body>
    </html>
  );
}
