import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";

//Lora font subset
const lora = Lora({subsets: ["latin"] });

//Metadata object contains the title and description of the website
export const metadata: Metadata = {
  
title: "Dynamics 365 Freelance | Up2202205",
  description: "ERP Freelancer" + " Azure Freelancer" + "Dynamics 365 Freelancer",
};

//Layout component contains the theme provider and the children
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
