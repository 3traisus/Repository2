import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";
import { roboto, luckiest_Guy } from "./fonts";
import { Provider } from "@/components/ui/provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${luckiest_Guy.variable} antialiased flex flex-row`}
      >
        <div className="flex h-screen w-full">
          {/* Barra lateral fija */}
          <aside className="fixed hidden h-full w-[300px] lg:flex">
            <SideNav />
          </aside>

          {/* Contenido principal */}
          <main className="flex lg:ml-[300px] justify-center w-full">
            <Provider>{children}</Provider>
          </main>
        </div>
      </body>
    </html>
  );
}
