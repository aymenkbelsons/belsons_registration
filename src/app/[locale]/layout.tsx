import "../globals.css";
import NavBar from "@/components/nav/NavBar";
import { Cairo } from 'next/font/google'
import classNames from "classnames";
import { Toaster } from 'react-hot-toast'
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import TankSrackWraper from "@/components/wraper/TankSrackWraper";

const cairo = Cairo({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: 'Belsons | Online cyber security course',
  description:
    "",
  openGraph: {
    title: '',
    description:
      "",
    url: '',
    type: 'website',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: '',
      },
    ],
  },
}


export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== 'undefined') {
    console.log(window.location.href)
  }
  const locale = await getLocale();
  return (
    <html lang={locale} data-arp=''>
      <body className={classNames("bg-dark-primary text-white overflow-x-clip w-screen", cairo.className)}>
        <TankSrackWraper>
          <NextIntlClientProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <NavBar />
            {children}
          </NextIntlClientProvider>
        </TankSrackWraper>
      </body>
    </html>
  );
}
