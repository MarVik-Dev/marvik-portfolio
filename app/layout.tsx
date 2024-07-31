import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

import clsx from "clsx";
import { TooltipProvider } from "./components/ui/Tooltip";

const dmSans = DM_Sans({ subsets: ["latin"] });
// Need to add correctly google image
interface ExtendedMetadata extends Metadata {
  imageUrl: string;
}


export const metadata: ExtendedMetadata = {
  title: "AJOUTER UN TITRE POUR LE RÉFÉRENCEMENT",
  description: "AJOUTER UNE DESCRIPTION POUR LE RÉFÉRENCEMENT",
  imageUrl: "IMAGE POUR LE RÉFÉRENCEMENT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/logo/marvik-logo.svg"
          sizes="any"
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
