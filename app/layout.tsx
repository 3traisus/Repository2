import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";
import { roboto, luckiest_Guy } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${luckiest_Guy.variable} antialiased flex flex-row`}
      >
        <div className="hidden w-[300px] lg:flex">
          <SideNav/>
        </div>
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
