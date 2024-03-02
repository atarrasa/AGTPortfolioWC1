import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";


const lora = Lora({subsets: ["latin"] });

/*
*/

export const metadata: Metadata = {
  /*
   {ERP Freelancer | Alvaro Gonzalez Tarrasa }
*/
  
title: "WC1",
  description: "ERP Freelancer" + " Azure Freelancer" + "Dynamics 365 Freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
