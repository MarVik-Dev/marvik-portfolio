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
  title:
    "Portfolio de Marvik - Développeur full stack JavaScript/TypeScript spécialisé en Node.js, Nest.js, React.js et Next.js",
  description:
    "Découvrez le métier de développeur full stack JavaScript/TypeScript à travers mon portfolio. Spécialisé en Node.js, Nest.js, React.js et Next.js, je suis passionné par la création d'applications web performantes et évolutives avec une approche en micro-services. Mes compétences techniques s'étendent sur la partie front-end avec React.js et Next.js, et sur la partie back-end avec Nest.js, basé sur Node.js et qui possède une architecture de type MVC (Model / Vue / Controller).",
  imageUrl: "/hero/developer.webp",
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
