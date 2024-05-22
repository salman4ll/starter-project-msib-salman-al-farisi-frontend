import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ChakraProvider } from "@chakra-ui/react";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Ambis Kerja",
  description: "Website Ambis Kerja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ChakraProvider>
          <Provider>
            {children}
          </Provider>
        </ChakraProvider>
        </body>
    </html>
  );
}
