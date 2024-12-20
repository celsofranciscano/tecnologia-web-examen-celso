import localFont from "next/font/local";
import "../../globals.css";
import Sidebar from "@/components/dashboard/sidebar/SideBar";
import { RousBoutiqueProvider } from "@/context/RousBoutique";
import LinkNavigate from "@/components/common/LinkNavigate";
const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rous Boutique",

  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <RousBoutiqueProvider>
      <html lang="en">
        <body className="  bg-white dark:bg-black text-black dark:text-white  antialiased">
          <Sidebar />
          <main className=" pt-20 px-4 md:pr-8 md:pl-64">
            {children}</main>
        </body>
      </html>
    </RousBoutiqueProvider>
  );
}