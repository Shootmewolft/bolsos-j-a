import type { Metadata } from "next";
import { Hero, Footer, WhatsAppButton, Banner } from "@/components";
import { Providers } from "@/context";
import { geistMono, geistSans, titleFont } from "@/lib";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolsos J&A",
  description:
    "Diseñamos y fabricamos bolsos únicos que combinan estilo, calidad y funcionalidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} antialiased`}
      >
        <Providers>
          <Banner />
          <Hero />
          <main className="page container mx-auto flex flex-col justify-between relative max-w-screen-2xl">
            {children}
            <Toaster />
            <WhatsAppButton />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
