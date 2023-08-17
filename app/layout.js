import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Nextmoov",
  description: "Nextmoov Official Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
