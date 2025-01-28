import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";
import { roboto, luckiest_Guy } from "./fonts";
import { Provider } from "@/components/ui/provider";
import { HeaderSocial } from "./components";

export const metadata: Metadata = {
  title: {
    template: "%s | Portafolio",
    default: "Portafolio",
  },
  description: "%s |Portafolio creado con nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${luckiest_Guy.variable} antialiased`}
      >
        <div className="fixed inset-0 h-screen w-sreen bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-[#25433E] opacity-80 blur-[100px]"></div>
        </div>
        <Provider>
          <div className="flex flex-col h-screen w-screen  relative">
            <header className="fixed flex w-full h-[50px]  justify-center z-50 bg-black">
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
              <HeaderSocial />
            </header>
            <div className="flex-1 mt-[50px] flex flex-row ">
              {/* Barra lateral fija */}
              <aside className="fixed hidden h-full w-[300px] lg:flex ">
                <SideNav />
              </aside>
              {/* Contenido principal */}
              <main className="flex-1 ml-0 lg:ml-[300px] ">{children}</main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}

/*
               <div className="fixed inset-0 h-screen w-sreen bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-[#25433E] opacity-80 blur-[100px]"></div>
        </div>
*/

/*
<link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
*/
